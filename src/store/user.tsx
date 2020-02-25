import { observable, action, computed } from 'mobx';

class UserStore {
  @observable firstName:String = ''
  @observable lastName:String = ''
  @observable age:Number = 0
  @observable gender:Number = 1

  @computed
  get fullName():String {
    return this.firstName + ' ' + this.lastName
  }

  @action.bound
  getUserInfo() {
    this.firstName = 'yongqiang'
    this.lastName = 'zhang' 
    this.age = 33
    this.gender = 1
  }
}

export default UserStore;
