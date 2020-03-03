  
import React from 'react';
import { Props } from 'global';
import reducer from './reducer';
import { Action, User } from './type';

export const initState: User = null;

const stateCtx = React.createContext(initState);
const dispatchCtx = React.createContext((() => 0) as React.Dispatch<Action>);

export const Provider: React.ComponentType = (props: Props) => {
  const [state, dispatch] = React.useReducer(reducer, initState);

  return (
    <dispatchCtx.Provider value={dispatch}>
      <stateCtx.Provider value={state}>{props.children}</stateCtx.Provider>
    </dispatchCtx.Provider>
  );
};

export const useState = () => React.useContext(stateCtx);
export const useDispatch = () => React.useContext(dispatchCtx);
