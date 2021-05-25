const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("api running");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
