import { createStore, combineReducers } from 'redux';
import languageReducer from './language.reducer';
import productsReducer from './cart.reducer';
import userReducer from './users.reducer';

const appReducer = combineReducers({
  language: languageReducer,
  cart: productsReducer,
  user: userReducer,
});
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;