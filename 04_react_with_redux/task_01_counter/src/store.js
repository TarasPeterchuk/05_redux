import { createStore, combineReducers } from 'redux';
import counterReducer from './counter.reducer';

const store = createStore(counterReducer);

export default store;
