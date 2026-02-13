import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeCart, clearAllItems } from "./redux/slice";
import { useNavigate } from "react-router-dom";
import "./App.css";

const CartList = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const manageQuantity = (id, value) => {
    const qty = Number(value);
    if (qty < 1) return;
    dispatch(updateQuantity({ id, quantity: qty }));
  };

  const handlePlaceOrder = () => {
    localStorage.clear();
    dispatch(clearAllItems());
    navigate("/");
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-page">
      <h2 className="cart-heading">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-card">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-img"
                />

                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <span className="brand">{item.brand}</span>
                </div>

                <div className="cart-qty">
                  <button
                    onClick={() =>
                      manageQuantity(item.id, (item.quantity || 1) - 1)
                    }
                  >
                    −
                  </button>

                  <input
                    type="number"
                    value={item.quantity || 1}
                    min="1"
                    onChange={(e) =>
                      manageQuantity(item.id, e.target.value)
                    }
                  />

                  <button
                    onClick={() =>
                      manageQuantity(item.id, (item.quantity || 1) + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <div className="cart-price">
                  ₹ {item.price * (item.quantity || 1)}
                </div>

                <button
                  className="remove-item"
                  onClick={() => dispatch(removeCart(item.id))}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total Amount</h3>
            <h2>₹ {totalAmount}</h2>

            <button
              className="place-order-btn"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartList;
