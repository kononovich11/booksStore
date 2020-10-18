import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers';

const strMiddleware = () => (next) => (action) => {
  if(typeof action === 'string') {
    return next({ //вызывает logMiddleware, next == dispatch или следующему middleware
      type: action,
    });
  }
  return next(action);
};

const logMiddleware = ({getState}) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action); //настощий dispatch, который передаст действие в reducer
};


const store = createStore(reducer, applyMiddleware(
  strMiddleware, 
  logMiddleware));

store.dispatch('HELLO');

export default store;