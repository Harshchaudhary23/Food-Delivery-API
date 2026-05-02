const express = require("express");
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodRoutes");

const app = express();


app.use(express.json());

app.use("/api", foodRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/foodDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});