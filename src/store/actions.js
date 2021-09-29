// import superagent from "superagent";

// let api = "fake";
// let apiCart = "fake";

// export const getRemoteData = () => (dispatch) => {
//   return superagent
//     .get(api)
//     .then((response) => {
//       dispatch(getAction(response.body));
//     })
//     .catch((err) => console.log(err.message));
// };

// export const getCartData = () => (dispatch) => {
//   return superagent
//     .get(apiCart)
//     .then((response) => {
//       dispatch(getCart(response.body));
//     })
//     .catch((err) => console.log(err.message));
// };

// export const getElectronics = () => (dispatch) => {
//   return superagent
//     .get(api)
//     .then((response) => {
//       dispatch(activatedCategory(response.body));
//     })
//     .catch((err) => console.log(err.message));
// };

// export const getFood = () => (dispatch) => {
//   return superagent
//     .get(api)
//     .then((response) => {
//       dispatch(activatedCategory(response.body));
//     })
//     .catch((err) => console.log(err.message));
// };

// export const putRemoteData = (id, data) => async (dispatch) => {
//   try {
//     let body = { inventory: data.inventory - 1 };
//     let response = await superagent.put(`${api}/${id}`).send(body);
//     dispatch(addProduct(response.body));
//     let res = await superagent.post(apiCart).send(response.body);
//     console.log(res.body);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// export const putRemoveFromCart = (id, data) => async (dispatch) => {
//   try {
//     let body = { inventory: data.inventory + 1 };
//     let response = await superagent.put(`${api}/${id}`).send(body);
//     dispatch(deleteProduct(response.body));
//     let res = await superagent.delete(`${api}/${id}`);
//     console.log(res.body);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

export const activatedCategory = (name) => {
  return {
    type: "ACTIVE",
    payload: name=="FOOD"||name=="ELECTRONICS"?name:"ALL",
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};

export const addProduct = (product) => {
  console.log(product);
  return {
    type: "ADD",
    payload: product,
  };
};

export const deleteProduct = (product, idx) => {
  return {
    type: "DELETE",
    payload: { product: product, idx: idx },
  };
};

export const showCart = (status) => {
  return {
    type: "SHOW",
    payload: status,
  };
};

export const inventoryAction = (product) => {
  return {
    type: "ADDPRODUCT",
    payload: product,
  };
};

export const getCart = (data) => {
  return {
    type: "GETCART",
    payload: data,
  };
};

export const productDetails = (data) => {
  return {
    type: "VIEW",
    payload: data,
  };
};