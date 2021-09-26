// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import categoriesReducer from "./categories";
// import productsReducer from "./products";

// let reducers = combineReducers({
//   category: categoriesReducer,
//   products: productsReducer,
// });

// const store = () => {
//   return createStore(reducers, composeWithDevTools());
// };

// export default store;

import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import categoriesReducer from './categories';
// import productsReducer from './products';

//1-  combine reducers in one reducer 
let reducers = combineReducers({categoriesReducer});

// 2- createStore 
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

// 3 export 
export default store();