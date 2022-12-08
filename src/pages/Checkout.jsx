import React from "react";
import { useStateValue } from "../providers/StateProvider";
import "./Checkout.css";
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "../components/CheckoutProduct";

function Checkout() {
  const [{ cart, user }] = useStateValue();

  const name = () => {
    if (user) {
      const onlyName = (user?.email).split("@")[0];
      const name = onlyName.charAt(0).toUpperCase() + onlyName.slice(1);
      return name;
    }
  };

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h3 style={{ padding: " 0 10px" }}>
            {user ? `Hello, ${name()}` : "Hello Guest"}
          </h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {cart?.length > 0 ? (
            cart.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p style={{ padding: "0 10px" }}>Your shopping cart is empty</p>
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
