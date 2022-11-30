import { CardTravel, SportsBasketball } from "@mui/icons-material";
import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";

function Subtotal() {
  const [{ cart }, dispatch] = useStateValue();
  console.log("CARR", cart);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"€"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
