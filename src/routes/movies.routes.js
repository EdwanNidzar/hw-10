const express = require("express");
const movieRouter = express.Router();
const {
  getAllMovies,
  createMovie,
  getMovieById,
  editMovie,
} = require("../controllers/movies.controller");

movieRouter.get("/h10/movies", getAllMovies);
movieRouter.post("/h10/movie", createMovie);
movieRouter.get("/h10/movie/:id", getMovieById);
movieRouter.put("/h10/movie/:id", editMovie);

module.exports = movieRouter;
