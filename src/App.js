import React from "react";
import CategoriesComponent from "./components/storefront/categories";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Products from "./components/storefront/products";
import ActiveCategory from "./components/storefront/current-category";

function App(props) {
  return (
    <div>
      <Header />
      <CategoriesComponent />
      <ActiveCategory/>
      <Products />
      <Footer />
    </div>
  );
}

export default App;
