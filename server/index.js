require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const express = require("express");
const app = express();
app.use(express.static("public"));
const cors = require("cors");

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Można zmienić '*' na domenę, z której pochodzą żądania
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  // console.log(req.body);
  console.log("---");
  const line_items = [];
  req.body.map((val, index) => {
    line_items.push({
      price: val.stripe_price,
      quantity: 1,
    });
  });
  console.log(line_items);
  console.log("---");
  const session = await stripe.checkout.sessions.create({
    line_items: line_items,
    mode: "payment",
    // payment_method_types: ["card", "p24", "blik"],
    success_url: "http://localhost:3000?success=true",
    cancel_url: "http://localhost:3000?canceled=true",
  });
  res.json({ url: session.url });
});

const getProducts = async () => {
  try {
    const products = await stripe.products.list();
    return products.data;
  } catch (error) {
    console.error("Błąd podczas pobierania produktów z Stripe:", error);
    throw error;
  }
};

getProducts()
  .then((products) => {
    console.log(
      "Identyfikatory produktów w Stripe:",
      products.map((product) => product.name + " " + product.default_price)
    );
    // Tutaj możesz wykorzystać identyfikatory produktów w swojej aplikacji
  })
  .catch((error) => {
    console.log("get product error:");
    console.log(error);
  });

app.listen(3000, () => console.log("Running on port 3000"));
