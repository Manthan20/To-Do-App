const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

const databaseUrl =
  "mongodb+srv://manthan:123@cluster0.vaiypjg.mongodb.net/blogapp?retryWrites=true&w=majority";
mongoose
  .connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected Successfully!!");
  })
  .catch((err) => {
    console.log("Could not connect to the database", err);
    process.exit();
  });

const todoRoute = require("./routes/todoRoutes.js");
app.use("/todo", todoRoute);

app.get("/", (req, res) => {
  res.json({ "TODO App": "Welcome to TODO App!!" });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
