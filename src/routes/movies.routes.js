const express = require("express");
const movieRouter = express.Router();
const {
  getAllMovies,
  createMovie,
} = require("../controllers/movies.controller");

movieRouter.get("/h10/movies", getAllMovies);
movieRouter.post("/h10/movie", createMovie);

module.exports = movieRouter;
