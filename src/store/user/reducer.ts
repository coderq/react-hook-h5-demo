import { Action, User } from './type';

const reducer = (state: User, action: Action) => {
  console.log('----action', action)
  switch (action.type) {
    case 'UPDATE': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;