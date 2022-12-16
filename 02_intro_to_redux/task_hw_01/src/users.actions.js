const ADDUSER = 'USER/ADDUSER';
const DELETEUSER = 'USER/DELETEUSER';

export const addUser = (user) => {
  return { type: ADDUSER, payload: user };
};
export const deleteUser = (id) => {
  return { type: DELETEUSER, payload: id };
};
