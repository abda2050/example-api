require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mountRoutes = require("./routes/index");

const app = express();
const port = 8080;

mountRoutes(app);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to example API</h1>");
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
