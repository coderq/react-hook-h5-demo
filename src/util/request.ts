import axios from 'axios'
import i18next from 'i18next';
import { Cookies } from 'react-cookie';

const cookie = new Cookies()
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://192.168.1.11:2048',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
const token = cookie.get('token')
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // 加上语言
    config.headers['lang'] = i18next.language
    
    return config
  },
  error => {
    // do something with request error
    // console.log(error) // for debug
    // return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    if (res.code) {
      // 对接日志
      // sendLog(...res)
    }
    return res
  },
  error => {
    /**
     * 对http status code进行处理
     */
  //   if (error.response) {
  //     switch (error.response.status) {
  //       case 401: // 如果服务器返回401：未授权，则清除Token，刷新页面
  //         store.dispatch('user/resetToken').then(() => {
  //           location.reload()
  //         })
  //     }
  //   }

  //   console.log('err' + error) // for debug
  //   Message({
  //     message: error.message,
  //     type: 'error',
  //     duration: 5 * 1000
  //   })
  //   return Promise.reject(error)
  }
)

export default service
