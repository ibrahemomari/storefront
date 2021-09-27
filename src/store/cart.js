let initialState = {
  cart: [],
  show: false,
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD":
      const products = state.cart.map((product) => product.name);
      if (!products.includes(payload.name)) {
        let count = state.count + 1;
        return { cart: [...state.cart, payload], show: true, count: count };
      }
      return { cart: state.cart, show: true, count: state.count };

    case "DELETE":
      const product = state.cart.filter((product) => {
        return product.name !== payload.name;
      });
      let count = state.count - 1;
      return { cart: [...product], show: true, count: count };

    default:
      return state;
  }
};

export default cartReducer;
