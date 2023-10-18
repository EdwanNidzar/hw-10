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
  try {
    const requiredFields = ["title", "genres", "year", "photo"];

    for (const field of requiredFields) {
      if (!movieData[field]) {
        throw new Error(`Field ${field} is required`);
      }
    }

    const movie = await movieRepository.insertMovie(movieData);
    return movie;
  } catch (error) {
    throw new Error(`Error creating movie: ${error.message}`);
  }
};

const getMoviebyId = async (movieId) => {
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

const editMovie = async (movieId, movieData) => {
  try {
    const existingMovie = await getMoviebyId(movieId);

    if (!existingMovie) {
      throw new Error(`Movie with ID ${movieId} not found`);
    }

    const requiredFields = ["title", "genres", "year", "photo"];

    for (const field of requiredFields) {
      if (!movieData[field]) {
        throw new Error(`Field '${field}' is required`);
      }
    }

    const editedMovie = await movieRepository.editMovie(movieId, movieData);

    return editedMovie;
  } catch (error) {
    throw new Error(`Error editing movie: ${error.message}`);
  }
};

module.exports = { getAllMovies, createMovie, getMoviebyId, editMovie };
