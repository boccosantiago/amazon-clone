import React from "react";
import moment from "moment/moment";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item, i) => (
        <CheckoutProduct
          key={i}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={0}
          buttonDisplay="none"
        />
      ))}
    </div>
  );
}

export default Order;
