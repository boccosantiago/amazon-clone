import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../providers/StateProvider";
import { getCartTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ cart, user }] = useStateValue();

  const navigate = useNavigate();

  const proceedToCheckout = () => {
    if (cart.length > 0 && user) {
      navigate("/payment");
    } else if (!user) navigate("/login");
  };

  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):
        <strong> $ {getCartTotal(cart).toFixed(2)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={proceedToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
