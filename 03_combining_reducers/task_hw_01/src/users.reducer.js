import { SET_USER, REMOVE_USER } from './users.actions';

const initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload.userData,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        user: {},
      };
    }

    default:
      return state;
  }
};

export default userReducer;
