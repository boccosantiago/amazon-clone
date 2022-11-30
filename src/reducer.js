export const initialState = {
  cart: [],
};

//selector
export const getCartTotal = (cart) =>
  cart?.reduce((acc, item) => acc + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "REMOVE_FROM_CART":
      const index = state.cart.findIndex((item) => item.id === action.id);
      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `cant remove product id: ${action.id} as is not in the cart`
        );
      }

      return {
        ...state,
        cart: newCart,
      };
    default:
      return state;
  }
};

export default reducer;
