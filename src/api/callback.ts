
import { ApiFunction } from 'global';
import request from 'util/request';

/**
 * path: /callback/razorpay/repayResult
 * method: post 
 * tags: callback-controller
 * summary: razorpay还款结果回调
 * operationId: razorpayRepayResultUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - razorpay_order_id | string<> | razorpay_order_id | 
     - razorpay_payment_id | string<> | razorpay_payment_id | 
     - razorpay_signature | string<> | razorpay_signature | 
 * responses: 
   - 200 | OK
 */
export const postRazorpayRepayResult: ApiFunction = data => request({
  url: '/callback/razorpay/repayResult',
  method: 'post',
  data
});

