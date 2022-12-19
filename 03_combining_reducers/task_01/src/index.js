// import './index.scss';
import store from './store';
import { decrement, increment, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 85, name: 'Tom' }));
store.dispatch(deleteUser(85));
store.dispatch(updateUser(76, { name: 'Ann', age: 18 }));
