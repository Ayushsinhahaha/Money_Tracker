require('dotenv').config()
const express = require("express");

const app = express();

app.get("/api/test", (req, res) => {
  res.json({ mssg: "test ok 2" });
});

app.post('/api/transaction',(req,res)=>{
    res.json(req.body)
})

app.listen(4040, () => {
  console.log("server is running");
});
