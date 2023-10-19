const movieService = require("../services/movies.service");

const multer = require("multer");
const path = require("path");

const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: diskStorage });

const getAllMovies = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;

    const movies = await movieService.getPaginatedMovies(page, pageSize);
    res.json({ data: movies });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovie = async (req, res) => {
  try {
    upload.single("photo")(req, res, async (err) => {
      if (err) {
        return res.status(400).send("Error uploading file");
      }

      const file = req.file;
      const movieData = req.body;

      const requiredFields = ["title", "genres", "year"];

      for (const field of requiredFields) {
        if (!movieData[field]) {
          return res.status(400).send(`Field ${field} is required`);
        }
      }

      const photoPath = file.path;

      const movie = await movieService.createMovie({
        ...movieData,
        photo: photoPath,
      });

      res.send({
        data: movie,
        message: "create movie success",
      });
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getMovieById = async (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    const movie = await movieService.getMoviebyId(movieId);
    res.json({ data: movie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const editMovie = async (req, res) => {
  try {
    upload.single("photo")(req, res, async (err) => {
      if (err) {
        return res.status(400).send("Error uploading file");
      }

      const movieId = parseInt(req.params.id);
      const movieData = req.body;

      const requiredFields = ["title", "genres", "year"];

      for (const field of requiredFields) {
        if (!movieData[field]) {
          return res.status(400).send(`Field '${field}' is required`);
        }
      }

      if (req.file) {
        movieData.photo = req.file.path;
      }

      const movie = await movieService.editMovie(movieId, movieData);

      res.json({ data: movie, message: "edit movie success" });
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    await movieService.deleteMovie(movieId);

    res.json({ message: "delete movie success" });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllMovies,
  createMovie,
  getMovieById,
  editMovie,
  deleteMovie,
};
