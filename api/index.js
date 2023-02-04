const express = require("express");
const cors = require("cors");
const Transaction = require("./models/Transaction.js");
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', true);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ mssg: "test ok 2" });
});

app.post("/api/transaction", async (req, res) => {
  await mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    })
    .then(
      () => {
        console.log("Database connected successfully");
      }
    );
  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({
    price,
    name,
    description,
    datetime,
  })
  res.json(transaction);
});

app.listen(4040);

//dYmTQX6D9XFcbO1A
// ayushsinhahaha database pwd
