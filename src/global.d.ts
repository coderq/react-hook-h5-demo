export class UserStore {
  firstName:String
  lastName:String
  age:Number
  gender:Number
  fullName:String
  getUserInfo:() => {}
}

export class Store {
  user:UserStore
}

export interface BackendResponse {
  code: Number,
  data: any,
  key?: String,
  msg?: String
}