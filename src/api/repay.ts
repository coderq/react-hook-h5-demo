
import { ApiFunction } from 'global';
import request from 'util/request';

/**
 * path: /repay/repay-order/detail
 * method: get 
 * tags: repay-controller
 * summary: 查询还款订单详情
 * operationId: getRepayOrderDetailUsingGET
 * consumes: application/json
 * parameters: 
   - loanOrderId | query | loanOrderId | true | string 
 * responses: 
   - 200 | OK
 */
export const getRepayOrderDetail: ApiFunction = data => request({
  url: '/repay/repay-order/detail',
  method: 'get',
  params: data
});


/**
 * path: /repay/repay-order/gatewayRepay
 * method: post 
 * tags: repay-controller
 * summary: 申请网关支付还款
 * operationId: gatewayRepayUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - repayOrderId | string<> | 还款单Id | 
 * responses: 
   - 200 | OK
 */
export const postRepayOrderGatewayRepay: ApiFunction = data => request({
  url: '/repay/repay-order/gatewayRepay',
  method: 'post',
  data
});

