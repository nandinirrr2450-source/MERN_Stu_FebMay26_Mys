// Handles request related to movie
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");

const router = express.Router();

router.get("/",getHome);// sends req to home page
router.get("/movies",getAllMovies);// sends req to get all movies
router.get("/movies/:id",getMovieById);// sends req to get movies based on id

router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);//sends req to create new movie
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie);//sends req to update movie details
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie);//sends req to delete movie

module.exports = router;


