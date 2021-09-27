export const addProduct = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: "DELETE",
    payload: product,
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
