const initialState = { usersList: [] };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER/ADDUSER':
      return { ...state, usersList: state.usersList.concat(action.payload) };
    case 'USER/DELETEUSER':
      return {
        ...state,
        usersList: state.usersList.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};
