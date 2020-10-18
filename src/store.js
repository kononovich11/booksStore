import {createStore, compose} from 'redux';

import reducer from './reducers';

const strEnhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  
  store.dispatch = (action) => {
    if(typeof action === 'string') {
      return originalDispatch({
        type: action,
      });
    }
    originalDispatch(action);
  };

  return store;
};

const logEnhancer = (createStore) => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    console.log(action.type);
    return originalDispatch(action);
  }
  return store;
};


const store = createStore(reducer, compose(
  strEnhancer, 
  logEnhancer));

store.dispatch('HELLO');

export default store;