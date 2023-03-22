const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const YOUR_DOMAIN = "http://localhost:3000";
require("dotenv").config();

const router = express.Router();

const session = await stripe.checkout.sessions.create({
  success_url: "http://localhost:3000/sucessOrder",
  cancel_url: "http://localhost:3000/err",
  currency: "PLN",
  line_items: [{ price: "price_H5ggYwtDq4fbrJ", quantity: 2 }],
  mode: "payment",
  payment_method_types: ["blik", "p24", "card"],
});

module.exports = router;

// router.post("/create-checkout-session", async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: "{{PRICE_ID}}",
//         quantity: 1,
//       },
//     ],
//     mode: "payment",
//     success_url: `${YOUR_DOMAIN}/sucessOrder`,
//     cancel_url: `${YOUR_DOMAIN}/err`,
//   });

//   res.send({ url: session.url });
// });
