import axios from 'axios'
import { Cookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import qs from 'querystring'
// import i18n from '@/lang'
// import { getLanguage } from '@/lang'

// create an axios instance
const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // url = base url + request url
  // baseURL: 'http://192.168.1.11:2048',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000 // request timeout
})
const cookies = new Cookies()
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    console.log('----dkdkdkd')
    try {
    const token = cookies.get('token')
    console.log('----Cookies', token)
    if (token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['Authorization'] = 'Bearer ' + token
    }
    const { i18n } = useTranslation();
    // 加上语言
    config.headers['lang'] = i18n.language

    } catch (e) { console.error(e) }
    
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
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

    // if the custom code is not 0, it is judged as an error.
    // if (res.code !== 0) {
    //   const msgKey = res.key
    //   const errMsg = i18n.t(`backend.${msgKey}`)
    //   // const errMsg = res.msg
    //   Message({
    //     message: errMsg || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })
    //   /**
    //    * 请求因Token问题，清除Token并重新登录
    //    * 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //    */
    //   if (res.code === 100103 || res.code === 10010303) {
    //     // to re-login
    //     MessageBox.confirm(i18n.t('login.reLoginMsg'), i18n.t('login.reLoginTitle'), {
    //       confirmButtonText: i18n.t('login.reLoginBtn'),
    //       cancelButtonText: i18n.t('basic.cancel'),
    //       type: 'warning'
    //     }).then(() => {
    //       store.dispatch('user/resetToken').then(() => {
    //         location.reload()
    //       })
    //     })
    //   }
    //   /**
    //    * 业务异常处理，根据res.code获取此错误码对应的资源给errMsg，显示给用户
    //    */
    //   return Promise.reject(new Error(errMsg || 'Error'))
    // } else {
      return res
    // }
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
