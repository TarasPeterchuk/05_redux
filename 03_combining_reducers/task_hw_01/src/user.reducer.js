import { SET_USER, REMOVE_USER } from './user.actions';

const initialState = null;
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return action.payload.userData;
    }
    case REMOVE_USER: {
      return null;
    }
    default:
      return state;
  }
};

// const initialState = {
//   user: {},
// };
// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_USER: {
//       return {
//         ...state,
//         userData: action.payload.userData,
//       };
//     }
//     case REMOVE_USER: {
//       return {
//         ...state,
//         userData: {},
//       };
//     }

//     default:
//       return state;
//   }
// };

export default userReducer;
