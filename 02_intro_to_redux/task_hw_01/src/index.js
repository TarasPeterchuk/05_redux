import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(addUser({ id: 98, name: 'Nelly' }));
store.dispatch(deleteUser(76));
