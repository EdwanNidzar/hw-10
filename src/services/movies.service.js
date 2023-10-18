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

module.exports = { getAllMovies, createMovie };
