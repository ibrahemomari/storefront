import React from "react";
import CategoriesComponent from "./components/storefront/categories";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Products from "./components/storefront/products";
import ActiveCategory from "./components/storefront/current-category";
import Simplecart from "./components/cart/simplecart";
import {BrowserRouter,Route} from "react-router-dom";
function App(props) {
  return (
    <div>
      <Header />
      <Simplecart/>
      <CategoriesComponent />
      <ActiveCategory/>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
