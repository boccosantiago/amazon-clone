import React from "react";
import "./Product.css";

function Product({ title, price, image, rating }) {
  return (
    <div className="product">
      <p>{title}</p>
      <div className="product__info">
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <img className="" src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
