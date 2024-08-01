import React, { useContext } from "react";
import './ProductCard.css';
import { CartContext } from "../cartContext";
import { FaCartPlus } from "react-icons/fa";

function ProductCard({ id, img, title, price }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div
        className="product-image-container"
        style={{ backgroundImage: `url(${img})` }}
      >
      </div>
      <div className="product-details">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">Rs. {price}</p>
        <button className="add-to-cart-btn" onClick={() => addItemToCart(id, 1)}>
          <FaCartPlus /> <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
