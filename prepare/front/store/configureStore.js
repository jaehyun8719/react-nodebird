import {createWrapper} from 'next-redux-wrapper';
import {createStore} from 'redux';

import reducer from '../reducers';

const configureStroe = () => {
  const store = createStore(reducer);
  store.dispatch({
    type: 'CHANGE_NICKNAME',
    data: 'boogijaehyun',
  })
  return store;
}

const wrapper = createWrapper(configureStroe, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;


