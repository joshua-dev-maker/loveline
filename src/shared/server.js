const express = require("express");
const pool = require("../configs/database");
// const mongoSanitize = require("express-mongo-sanitize");
const PORT = 4000;
pool;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to loveline");
});

app.listen(PORT, async () => {
  console.log(`listening to app on PORT ${PORT}`);
});

// //sanitize data against nosql injection
// app.use(mongoSanitize());
