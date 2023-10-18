const movieService = require("../services/movies.service");

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json({ data: movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const movieData = req.body;
    const movie = await movieService.createMovie(movieData);

    res.send({
      data: movie,
      message: "create movie success",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { getAllMovies, createMovie };
