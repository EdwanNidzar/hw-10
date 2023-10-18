const movieRepository = require("../repositories/movies.repository");

const getAllMovies = async () => {
  try {
    const movies = await movieRepository.findAllMovies();
    if (!movies || movies.length === 0) {
      throw new Error("No movies available");
    } else {
      return movies;
    }
  } catch (error) {
    throw new Error("Error fetching films");
  }
};

const createMovie = async (movieData) => {
  const requiredFields = ["title", "genres", "year", "photo"];

  for (const field of requiredFields) {
    if (!movieData[field]) {
      throw new Error(`Field '${field}' is required`);
    }
  }

  const movie = await movieRepository.insertMovie(movieData);
  return movie;
};

const getAllMoviebyId = async (movieId) => {
  try {
    const movie = await movieRepository.findMovieById(movieId);
    if (!movie) {
      throw new Error(`Movie ${movie} not found`);
    } else {
      return movie;
    }
  } catch (error) {
    throw new Error("Error fetching films");
  }
};

module.exports = { getAllMovies, createMovie, getAllMoviebyId };
