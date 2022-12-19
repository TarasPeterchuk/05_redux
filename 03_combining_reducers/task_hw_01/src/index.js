// import './index.scss';
import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './users.actions';

console.log(store.getState());
store.subscribe(() => console.log(store.getState()));

store.dispatch(setLanguage('fra'));
store.dispatch(setLanguage('ua'));

store.dispatch(addProduct({ id: 76, name: 'milk' }));
store.dispatch(addProduct({ id: 90, name: 'cofee' }));
store.dispatch(removeProduct(76));

store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(setUser({ name: 'Tom' }));
store.dispatch(removeUser());
