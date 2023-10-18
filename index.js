const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const port = process.env.PORT || 8081;

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
