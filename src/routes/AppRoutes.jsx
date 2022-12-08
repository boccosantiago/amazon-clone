import React from "react";
import Header from "../components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Payment from "../pages/Payment";
import Thanks from "../pages/Thanks";
import Orders from "../pages/Orders";
import { useState } from "react";
import Footer from "../components/Footer";
import { loadStripe } from "@stripe/stripe-js";
import ScrollToTop from "../components/ScrollToTop";
import { Elements } from "@stripe/react-stripe-js";

function AppRoutes() {
  const promise = loadStripe(
    "pk_test_51MAFglE4cmcH3ST6Hi7vxgGBlf9wCeSpSGE8yalz0sQWDWEGjc15Z4JYQna4zJEy9A30liWYFm5gzOXQDGNGQwwl006bNLFhXN"
  );

  const [query, setQuery] = useState("");

  return (
    <div>
      <ScrollToTop />
      <Header setQuery={setQuery} query={query} />
      <Routes>
        <Route path="/" element={<Home query={query} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/thanksforshopping" element={<Thanks />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default AppRoutes;
