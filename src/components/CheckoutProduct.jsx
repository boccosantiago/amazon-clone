import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider";
import "animate.css";

function CheckoutProduct({ buttonDisplay, id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const [fade, setFade] = useState("");

  const removeFromCart = () => {
    setFade("fade");

    setTimeout(
      dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
      }),
      1000
    );
  };

  return (
    <div className={`checkoutProduct ${fade}`}>
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button style={{ display: buttonDisplay }} onClick={removeFromCart}>
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
