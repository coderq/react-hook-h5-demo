
import request from '@/utils/request';

/**
 * path: /loan/channel/detail
 * method: get 
 * tags: loan-controller
 * summary: 查询渠道详情
 * operationId: getChannelDetailUsingGET
 * consumes: application/json
 * parameters: 
   - channelId | query | channelId | true | string 
 * responses: 
   - 200 | OK
 */
export const getChannelDetail = data => request({
  url: '/loan/channel/detail',
  method: 'get',
  params: data
});


/**
 * path: /loan/loan-order/apply
 * method: post 
 * tags: loan-controller
 * summary: 用户申请借款
 * operationId: createOrderUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - channelId | string<> | 渠道Id | 
     - panCardNo | string<> | PAN卡号 | 
 * responses: 
   - 200 | OK
 */
export const postLoanOrderApply = data => request({
  url: '/loan/loan-order/apply',
  method: 'post',
  data
});


/**
 * path: /loan/loan-order/confirm
 * method: post 
 * tags: loan-controller
 * summary: 用户确认借款
 * operationId: confirmOrderUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - loanAmount | number<> | 确认借款金额 | 
     - loanOrderId | string<> | 借款单Id | 
     - productId | string<> | 产品Id | 
     - verifyCode | string<> | 验证码 | 
 * responses: 
   - 200 | OK
 */
export const postLoanOrderConfirm = data => request({
  url: '/loan/loan-order/confirm',
  method: 'post',
  data
});


/**
 * path: /loan/loan-order/latest
 * method: get 
 * tags: loan-controller
 * summary: 查询最新一笔借款记录
 * operationId: getLastUsingGET
 * consumes: application/json
 * parameters: 

 * responses: 
   - 200 | OK
 */
export const getLoanOrderLatest = data => request({
  url: '/loan/loan-order/latest',
  method: 'get',
  params: data
});


/**
 * path: /loan/loan-order/list
 * method: get 
 * tags: loan-controller
 * summary: 查询借款订单列表
 * operationId: getOrderListUsingGET
 * consumes: application/json
 * parameters: 

 * responses: 
   - 200 | OK
 */
export const getLoanOrderList = data => request({
  url: '/loan/loan-order/list',
  method: 'get',
  params: data
});


/**
 * path: /loan/loan-order/loanAgreement
 * method: get 
 * tags: loan-controller
 * summary: 借款合同
 * operationId: loanAgreementUsingGET
 * consumes: application/json
 * parameters: 
   - loanOrderId | query | 借款单Id | false | string 
   - productId | query | 产品Id | false | string 
   - loanAmount | query | 确认借款金额 | false | number 
 * responses: 
   - 200 | OK
 */
export const getLoanOrderLoanAgreement = data => request({
  url: '/loan/loan-order/loanAgreement',
  method: 'get',
  params: data
});


/**
 * path: /loan/product/list
 * method: get 
 * tags: loan-controller
 * summary: 查询产品列表
 * operationId: productListUsingGET
 * consumes: application/json
 * parameters: 
   - channelId | query | 渠道Id | false | string 
 * responses: 
   - 200 | OK
 */
export const getProductList = data => request({
  url: '/loan/product/list',
  method: 'get',
  params: data
});

