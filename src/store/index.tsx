import UserStore from './user'

class Store {
  user: Object|null = new UserStore()
  // constructor() {
  //   this.user = new UserStore()
  // }
}

export default new Store()