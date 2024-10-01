const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.listen(4500, (req, res) => {
  console.log("connected");
});
mongoose
  .connect("mongodb://localhost:27017/sampleDB")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

const userSchama = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  married: Boolean,
});
const userModel = new mongoose.model("userModel", userSchama);
app.post("/api/v1/user/new", async (req, res) => {
  const user = await userModel.create(req.body);
  res.status(200).json({
    success: true,
    message: "User added successfully",
  });
});

app.get("/api/v1/users", async (req, res) => {
  const users = await userModel.find();
  res.status(201).json({
    success: true,
    users,
  });
});
