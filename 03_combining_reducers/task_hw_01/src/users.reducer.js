import { SET_USER, REMOVE_USER } from './users.actions';

const initialState = {
  userData: {},
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        userData: action.payload.userData,
      };
    }
    case REMOVE_USER: {
      return {
        ...state,
        userData: {},
      };
    }

    default:
      return state;
  }
};

export default userReducer;
