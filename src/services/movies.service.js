const movieRepository = require("../repositories/movies.repository");

const getAllMovies = async () => {
  try {
    const movies = await movieRepository.getAllMovies();
    if (!movies || movies.length === 0) {
      throw new Error("No movies available");
    } else {
      return movies;
    }
  } catch (error) {
    throw new Error("Error fetching films");
  }
};

module.exports = { getAllMovies };
