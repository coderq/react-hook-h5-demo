
import request from '@/utils/request';

/**
 * path: /user/addBankCard
 * method: post 
 * tags: user-controller
 * summary: 用户添加银行卡
 * operationId: addBankCardUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - cardNumber | string<> | 银行卡号 | 
     - ifsc | string<> | 汇款路线号码 | 
 * responses: 
   - 200 | OK
 */
export const postAddBankCard = data => request({
  url: '/user/addBankCard',
  method: 'post',
  data
});


/**
 * path: /user/getBankBranch
 * method: get 
 * tags: user-controller
 * summary: 查询ifsc码
 * operationId: getBankBranchUsingGET
 * consumes: application/json
 * parameters: 
   - parentId | query | parentId | false | integer 
   - gradeId | query | gradeId | true | integer 
 * responses: 
   - 200 | OK
 */
export const getGetBankBranch = data => request({
  url: '/user/getBankBranch',
  method: 'get',
  params: data
});


/**
 * path: /user/getBindCardResult
 * method: post 
 * tags: user-controller
 * summary: 获取绑卡结果 0-验证中 1-验证通过 2-验证失败
 * operationId: getBindCardResultUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - cardNumber | string<> | 银行卡号 | 
     - ifsc | string<> | 汇款路线号码 | 
 * responses: 
   - 200 | OK
 */
export const postGetBindCardResult = data => request({
  url: '/user/getBindCardResult',
  method: 'post',
  data
});


/**
 * path: /user/identity-card
 * method: get 
 * tags: user-controller
 * summary: 查询用户证件信息
 * operationId: getIdentityCardUsingGET
 * consumes: application/json
 * parameters: 

 * responses: 
   - 200 | OK
 */
export const getIdentityCard = data => request({
  url: '/user/identity-card',
  method: 'get',
  params: data
});


/**
 * path: /user/languageSelect
 * method: get 
 * tags: user-controller
 * summary: 查询语种枚举
 * operationId: selectLanguageTypeUsingGET
 * consumes: application/json
 * parameters: 

 * responses: 
   - 200 | OK
 */
export const getLanguageSelect = data => request({
  url: '/user/languageSelect',
  method: 'get',
  params: data
});


/**
 * path: /user/otherCardOcr
 * method: post 
 * tags: user-controller
 * summary: 其他卡图像Ocr
 * operationId: otherCardOcrUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - cardType | string<> | 证件类型(pan_card,aadhaar_card,voter_id,passport,driving_license) | 
 * responses: 
   - 200 | OK
 */
export const postOtherCardOcr = data => request({
  url: '/user/otherCardOcr',
  method: 'post',
  data
});


/**
 * path: /user/saveBasicInfo
 * method: post 
 * tags: user-controller
 * summary: 保存用户基本信息
 * operationId: saveBasicInfoUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - birthday | string<> | 出生日期 | 
     - city | string<> | 所在城市 | 
     - company | string<> | 公司单位 | 
     - district | string<> | 所在行政区 | 
     - education | string<> | 教育程度 | 
     - email | string<> | 邮箱地址 | 
     - employmentType | string<> | 工作性质 | 
     - firstName | string<> | firstName | 
     - gender | integer<int32> | 性别(1:男性 2:女性) | 
     - language | string<> | 使用语言 | 
     - lastName | string<> | lastName | 
     - maritalStatus | string<> | 婚姻状况 | 
     - middleName | string<> | middleName | 
     - monthlyIncome | number<> | 月收入 | 
     - pinCode | string<> | pinCode | 
     - state | string<> | 所在州 | 
 * responses: 
   - 200 | OK
 */
export const postSaveBasicInfo = data => request({
  url: '/user/saveBasicInfo',
  method: 'post',
  data
});


/**
 * path: /user/saveEmergencyContact
 * method: post 
 * tags: user-controller
 * summary: 保存用户紧急联系人信息
 * operationId: saveEmergencyContactUsingPOST
 * consumes: application/json
 * parameters: 
   - reqs | body | reqs | true | undefined 
     - emergencyContactMobile1 | string<> | 紧急联系人1手机号 | 
     - emergencyContactMobile2 | string<> | 紧急联系人2手机号 | 
     - emergencyContactName1 | string<> | 紧急联系人1姓名 | 
     - emergencyContactName2 | string<> | 紧急联系人2姓名 | 
     - emergencyContactRelation1 | string<> | 紧急联系人1关系 | 
     - emergencyContactRelation2 | string<> | 紧急联系人2关系 | 
 * responses: 
   - 200 | OK
 */
export const postSaveEmergencyContact = data => request({
  url: '/user/saveEmergencyContact',
  method: 'post',
  data
});


/**
 * path: /user/saveFaceImage
 * method: post 
 * tags: user-controller
 * summary: 保存用户人脸图像
 * operationId: saveFaceImageUsingPOST
 * consumes: multipart/form-data
 * parameters: 
   - file | formData | file | true | file 
   - isHackPass | query | isHackPass | true | boolean 
 * responses: 
   - 200 | OK
 */
export const postSaveFaceImage = data => request({
  url: '/user/saveFaceImage',
  method: 'post',
  data
});


/**
 * path: /user/upload/otherCard/back
 * method: post 
 * tags: user-controller
 * summary: 上传其他卡反面图像
 * operationId: uploadOtherCardBackUsingPOST
 * consumes: multipart/form-data
 * parameters: 
   - file | formData | file | true | file 
   - cardType | query | cardType | true | string 
 * responses: 
   - 200 | OK
 */
export const postUploadOtherCardBack = data => request({
  url: '/user/upload/otherCard/back',
  method: 'post',
  data
});


/**
 * path: /user/upload/otherCard/front
 * method: post 
 * tags: user-controller
 * summary: 上传其他卡正面图像
 * operationId: uploadOtherCardFrontUsingPOST
 * consumes: multipart/form-data
 * parameters: 
   - file | formData | file | true | file 
   - cardType | query | cardType | true | string 
 * responses: 
   - 200 | OK
 */
export const postUploadOtherCardFront = data => request({
  url: '/user/upload/otherCard/front',
  method: 'post',
  data
});


/**
 * path: /user/upload/panCard
 * method: post 
 * tags: user-controller
 * summary: Pan卡图像Ocr
 * operationId: uploadPanCardUsingPOST
 * consumes: multipart/form-data
 * parameters: 
   - file | formData | file | true | file 
 * responses: 
   - 200 | OK
 */
export const postUploadPanCard = data => request({
  url: '/user/upload/panCard',
  method: 'post',
  data
});

