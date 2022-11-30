import React from "react";
import { useStateValue } from "../StateProvider";
import "./Product.css";

function Product({ id, title, price, image, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  console.log("CART", cart);
  const addToCart = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <p>{title}</p>
      <div className="product__info">
        <p className="product__price">
          <strong>{price} </strong>
          <small>€</small>
        </p>
      </div>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>⭐</p>
          ))}
      </div>
      <img className="" src={image} alt="" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
