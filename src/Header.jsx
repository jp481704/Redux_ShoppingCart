import React from "react";
import AddToCart from "./AddToCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">MyShop</div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/">Products</Link>
       
        </nav>
        <Link to="/cart">
          <AddToCart />
        </Link>
      </header>
    </div>
  );
};

export default Header;
