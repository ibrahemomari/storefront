import React from "react";
import Categories from "./components/storefront/categories";
import Products from "./components/storefront/products";
import Header from "./components/header/header";
import ActiveCategories from "./components/storefront/current-category";
import Footer from "./components/footer/footer";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container minHeight="100vh">
        <Categories />
        <ActiveCategories />
        <Products />
      </Container>
      <Footer />
      
    </>
  );
}

export default App;
