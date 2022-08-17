require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoString = process.env.DATABASE_URL;
const route = require("./routes/route");

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log("error", error);
});

database.once("connected", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use("/api", route);

app.listen(8080, () => {
  console.log(`Listening On Port: ${8080}`);
});
