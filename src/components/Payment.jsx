import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCartTotal } from "../reducer";
import axios from "../axios/axios";
import { db } from "../firebase";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [succeded, setSucceded] = useState(false);
  const [clientSecret, setClienteSecret] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe expects, the total in a currencies subunits (cents)
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClienteSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  console.log("A", clientSecret);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        navigate("/thanksforshopping", { replace: true });
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout
          <Link to="/checkout"> ({cart?.length} items) </Link>
        </h1>
        <div className="payment__delivery">
          <div className="payment__title">
            <h3>Delivery Address</h3>
            <div className="payment__address">
              <p>{user?.email}</p>
              <p>Passeig de Gracia 100</p>
              <p>Barcelona, Spain</p>
              <p>08002</p>
            </div>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <h3>Order Total: $ {getCartTotal(cart).toFixed(2)}</h3>
                <button disabled={processing || disabled || succeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
