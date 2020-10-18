import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

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
  thunkMiddleware,
  strMiddleware, 
  logMiddleware));


const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION',
  }), timeout);
};

store.dispatch(delayedActionCreator(5000));

export default store;