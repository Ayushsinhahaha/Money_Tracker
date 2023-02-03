// const dotenv=require('dotenv')
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())

app.get("/api/test", (req, res) => {
  res.json({ mssg: "test ok 2" });
});

app.post("/api/transaction", (req, res) => {
  const {name,description,datetime}=res.body;
  
  res.json(req.body);
});

app.listen(4040, () => {
  console.log("server is running");
});


//dYmTQX6D9XFcbO1A