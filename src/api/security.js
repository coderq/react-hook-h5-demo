
import request from 'util/request';

/**
 * path: /security/existsByMobile
 * method: get 
 * tags: security-controller
 * summary: 检查手机号码
 * operationId: existsByMobileUsingGET
 * consumes: application/json
 * parameters: 
   - mobile | query | 手机号 | false | string 
 * responses: 
   - 200 | OK
 */
export const getExistsByMobile = data => request({
  url: '/security/existsByMobile',
  method: 'get',
  params: data
});


/**
 * path: /security/getUserInfo
 * method: get 
 * tags: security-controller
 * summary: 获取登录用户信息接口
 * operationId: getUserInfoUsingGET
 * consumes: application/json
 * parameters: 

 * responses: 
   - 200 | OK
 */
export const getGetUserInfo = data => request({
  url: '/security/getUserInfo',
  method: 'get',
  params: data
});


/**
 * path: /security/getVerifyCode
 * method: get 
 * tags: security-controller
 * summary: 获取验证码接口
 * operationId: getVerifyCodeUsingGET
 * consumes: application/json
 * parameters: 
   - mobile | query | 手机号码 | false | string 
   - type | query | 短信类型(1-登录 2-注册 3-重置密码) | false | integer 
 * responses: 
   - 200 | OK
 */
export const getGetVerifyCode = data => request({
  url: '/security/getVerifyCode',
  method: 'get',
  params: data
});


/**
 * path: /security/modifyPassword
 * method: post 
 * tags: security-controller
 * summary: 修改密码接口
 * operationId: modifyPasswordUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - newPassword | string<> | 新密码 | 
     - oldPassword | string<> | 旧密码 | 
 * responses: 
   - 200 | OK
 */
export const postModifyPassword = data => request({
  url: '/security/modifyPassword',
  method: 'post',
  data
});


/**
 * path: /security/register
 * method: post 
 * tags: security-controller
 * summary: 注册帐号
 * operationId: registerUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - channelId | string<> | 渠道Id | 
     - mobile | string<> | 手机号 | 
     - utmSource | string<> | 注册来源 | 
     - verifyCode | string<> | 注册验证码 | 
 * responses: 
   - 200 | OK
 */
export const postRegister = data => request({
  url: '/security/register',
  method: 'post',
  data
});


/**
 * path: /security/resetPassword
 * method: post 
 * tags: security-controller
 * summary: 重置密码接口
 * operationId: resetPasswordUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - mobile | string<> | 手机号 | 
     - newPassword | string<> | 新密码 | 
     - verifyCode | string<> | 手机验证码 | 
 * responses: 
   - 200 | OK
 */
export const postResetPassword = data => request({
  url: '/security/resetPassword',
  method: 'post',
  data
});

