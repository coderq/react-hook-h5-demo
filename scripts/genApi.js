const fs = require('fs');
const path = require('path');
const axios = require('axios');

const genApiData = ({ paths, definitions }) => {
  const result = {};
  for (const path in paths) {
    const [, business ] = path.split('/');
    result[business] = result[business] || [];
    for (const method in paths[path]) {
      result[business].push({
        path,
        method,
        ...paths[path][method]
      });
    }
  }
  return { data: result, definitions };
}

const getSchemaContent = (ref, definitions) => {
  const name = ref.split('/').pop();
  const { properties } = definitions[name];
  const result = [];
  for(const property in properties) {
    const { type = '', description = '', format = '', example = '' } = properties[property];
    result.push(`     - ${property} | ${type}<${format}> | ${description} | ${example}`);
  }
  return result.join('\n');
}

const parametersFormator = (parameters = [], definitions) => {
  return parameters.map(({ name = undefined, in: _in = undefined, description = '', required = undefined, type = undefined, schema }) => {
    const schemaContent = schema && schema.$ref ? getSchemaContent(schema.$ref, definitions) : '';
    return [`   - ${name} | ${_in} | ${description} | ${required} | ${type} `, schemaContent].filter(d => d).join('\n');
  }).join('\n');  
}

const responsesFormator = responses => {
  const result = [];
  for (const code in responses) {
    const { description } = responses[code];
    result.push(`   - ${code} | ${description}`);
  }
  return result.join('\n')
}

// const securityFormator = securities => {
//   const result = [];
//   for (const security of securities) {
//     console.log(securities, security)
//     const { key } = security;
//     result.push(`*    ${key} | ${security[key].join()}`)
//   }
// }

const upperFirstLetter = word => {
  return word.replace(/(\b|\_)[a-z]/g, $ => $.toUpperCase()).replace(/[^A-Za-z0-9]/g, '');
}

const apiFormator = ({ business, path, method, tags, summary, operationId, consumes, produces, parameters, responses, security }, definitions) => {
  const _path = path.replace(new RegExp(`^/${business}`), '');
  const name = `${method.toLowerCase()}${upperFirstLetter(_path)}`;
  const funcStr = method.toLowerCase() === 'get'
    ? `request({
  url: '${path}',
  method: '${method}',
  params: data
})`
    : `request({
  url: '${path}',
  method: '${method}',
  data
})`;
  return `
/**
 * path: ${path}
 * method: ${method} 
 * tags: ${tags.join()}
 * summary: ${summary}
 * operationId: ${operationId}
 * consumes: ${consumes.join()}
 * parameters: 
${parametersFormator(parameters, definitions)}
 * responses: 
${responsesFormator(responses)}
 */
export const ${name} = data => ${funcStr};
`;
}

const writeFile = ({ data, definitions }) => {
  for (const business in data) {
    const apis = data[business];
    const fileContent = `
import request from '@/utils/request';
${apis.map(api => apiFormator({ ...api, business }, definitions)).join('\n')}
`;
    const file = path.resolve(__dirname, `../src/api/${business}.js`);
    fs.writeFileSync(file, fileContent);
  }
}

axios('http://test-client.inpaway.in/v2/api-docs')
// axios('http://o284h26497.wicp.vip/v2/api-docs')
  .then(({ data }) => ({ paths: data.paths, definitions: data.definitions }))
  .then(genApiData)
  .then(writeFile);