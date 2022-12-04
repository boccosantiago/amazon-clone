import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import Thanks from "./components/Thanks";

const promise = loadStripe(
  "pk_test_51MAFglE4cmcH3ST6Hi7vxgGBlf9wCeSpSGE8yalz0sQWDWEGjc15Z4JYQna4zJEy9A30liWYFm5gzOXQDGNGQwwl006bNLFhXN"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("this user is:", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
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
      </BrowserRouter>
    </div>
  );
}

export default App;
