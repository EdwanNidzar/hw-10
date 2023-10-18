const models = require("../../models");
const Movie = models.Movie;

const findAllMovies = async () => {
  try {
    const movies = await Movie.findAll();
    return movies;
  } catch (error) {
    throw new Error("Error fetching films from database");
  }
};

const insertMovie = async (movieData) => {
  try {
    const movie = await Movie.create({
      title: movieData.title,
      genres: movieData.genres,
      year: movieData.year,
      photo: movieData.photo,
    });
    return movie;
  } catch (error) {
    throw new Error("Error creating movie in the database");
  }
};

const findMovieById = async (movieId) => {
  try {
    const movie = await Movie.findByPk(movieId);

    if (!movie) {
      throw new Error(`Movie with ID ${movieId} not found`);
    }

    return movie;
  } catch (error) {
    throw new Error("Error fetching movie by ID from database");
  }
};

module.exports = { findAllMovies, insertMovie, findMovieById };
