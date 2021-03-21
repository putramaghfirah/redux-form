import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

export const Unsubscribe = store.subscribe(() => {
  console.log('Store changed', store.getState());
});
export default store;
