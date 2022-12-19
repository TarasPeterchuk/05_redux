import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';
const initialState = {
  productsList: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        productsList: state.productsList.concat(action.payload.product),
      };
    }
    case REMOVE_PRODUCT: {
      const newList = state.productsList.filter(
        (product) => product.id !== action.payload.productId
      );
      return { ...state, productsList: newList };
    }
    default:
      return state;
  }
};
export default productsReducer;
