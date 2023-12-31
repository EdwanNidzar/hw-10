const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const moviesRouter = require("./src/routes/movies.routes");

const port = process.env.PORT || 8081;

dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views/movies"));

app.use(morgan("dev"));
app.use(express.json());
app.use(moviesRouter);

app.get("/ping", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
