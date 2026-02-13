import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/productSlice";
import { addItem, removeCart } from "./redux/slice";
import Header from "./Header";

const Product = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart.items);

  const { items, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <h2 style={{ textAlign: "center" }}>Loading products...</h2>;
  }

  if (status === "failed") {
    return <h2 style={{ textAlign: "center" }}>{error}</h2>;
  }

  return (
    <>
      <Header />

      <div className="full-body">
        {items.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-badge">New</div>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="product-image"
            />

            <div className="product-details">
              <span className="category">{product.category}</span>

              <h2 className="product-title">{product.title}</h2>

              <p className="description">{product.description}</p>

              <div className="product-footer">
                <span className="price">${product.price}</span>
                {cartSelector.find((item) => item.id === product.id) ? (
                  <button
                    onClick={() => dispatch(removeCart(product))}
                    className="remove-from-cart"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    className="add-to-cart"
                    onClick={() => dispatch(addItem(product))}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
