import React, { useContext, useState } from "react";
import './ProductCard.css';
import { CartContext } from "../cartContext";
import { FaCartPlus } from "react-icons/fa";
import Heart from "react-animated-heart";
import { WishlistContext } from "../wishlistContext";

function ProductCard({ id, img, title, price }) {

  const { addItemToCart } = useContext(CartContext);

  const { toggleItemInWishlist, isInWishlist } = useContext(WishlistContext);


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
        <div className="d-flex justify-content-around">
          <button className="add-to-cart-btn" onClick={() => addItemToCart(id, 1)}>
            <FaCartPlus /> <span>Add to Cart</span>
          </button>
          <div className="heart-cont">
            <Heart isClick={isInWishlist(id)} onClick={() => toggleItemInWishlist(id)} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
