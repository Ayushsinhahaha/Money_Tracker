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

  try {
    // Connect to the MongoDB cluster
     await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }

  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({
    price,
    name,
    description,
    datetime,
  })
  res.json(transaction);
});

app.get('/api/transactions',async (req,res)=>{
  await mongoose.connect(process.env.MONGO_URL);
  const transactions=await Transaction.find();
  res.json(transactions)
})


app.listen(4040);

//dYmTQX6D9XFcbO1A
// ayushsinhahaha database pwd

