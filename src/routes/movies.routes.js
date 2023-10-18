const express = require("express");
const movieRouter = express.Router();
const { getAllMovies } = require("../controllers/movies.controller");

movieRouter.get("/h10/movies", getAllMovies);

module.exports = movieRouter;
