const models = require("../../models");
const Movie = models.Movie;

const getAllMovies = async () => {
  try {
    const movies = await Movie.findAll();
    return movies;
  } catch (error) {
    throw new Error("Error fetching films from database");
  }
};

module.exports = { getAllMovies };
