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

module.exports = { findAllMovies, insertMovie };
