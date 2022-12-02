import { CardTravel, SportsBasketball } from "@mui/icons-material";
import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  console.log("CARR", cart);

  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):
        <strong> $ {getCartTotal(cart)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>

      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
