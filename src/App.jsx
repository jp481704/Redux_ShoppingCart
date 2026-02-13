import React from "react";
import Header from "./Header";
import "./App.css";
import Product from "./ProductList";
import CartList from "./CartItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
