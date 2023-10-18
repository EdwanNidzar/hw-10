const movieService = require("../services/movies.service");

const getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMovies();
    res.json({ data: movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMovies };
