import React from "react";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  return (
    <div className="cart">
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="cart-count">
        {cartSelector.length ? cartSelector.length : 0}
      </span>
    </div>
  );
};

export default AddToCart;
