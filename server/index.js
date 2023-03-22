require("dotenv").config();
const express = require("express");
const app = express();

const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET);

app.request(express.json());

app.use(express.json);
app.use(cors());

app.use("/stripe", stripe);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server working on Port 5000`);
});
