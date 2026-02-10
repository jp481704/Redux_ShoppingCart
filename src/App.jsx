import React from "react";
import Header from "./Header";
import "./App.css";
import Product from "./Product";
import CartList from "./CartList";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<CartList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
