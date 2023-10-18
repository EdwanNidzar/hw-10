const express = require("express");
const movieRouter = express.Router();
const {
  getAllMovies,
  createMovie,
  getAllMovieById,
} = require("../controllers/movies.controller");

movieRouter.get("/h10/movies", getAllMovies);
movieRouter.post("/h10/movie", createMovie);
movieRouter.get("/h10/movie/:id", getAllMovieById);

module.exports = movieRouter;
