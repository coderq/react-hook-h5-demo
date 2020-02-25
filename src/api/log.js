
import request from '@/utils/request';

/**
 * path: /log/crash-log
 * method: post 
 * tags: log-controller
 * summary: 错误日志上传
 * operationId: crashLogUsingPOST
 * consumes: multipart/form-data
 * parameters: 
   - file | formData | file | true | file 
 * responses: 
   - 200 | OK
 */
export const postCrashLog = data => request({
  url: '/log/crash-log',
  method: 'post',
  data
});

