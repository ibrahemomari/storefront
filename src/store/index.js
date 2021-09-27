import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import cartReducer from "./cart";

let reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
