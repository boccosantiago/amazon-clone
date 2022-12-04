/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51MAFglE4cmcH3ST6pzB8rLfNu6sGmH0DQBcevjDmFXkepqT6oMHR2QhrgOr2RCGT3fzmKMieg6y6qhQRQFjPmNT800WD9vWAKu"
);

// API

// -App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
// Api Routes
// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/ecommerce-55ba3/us-central1/api
