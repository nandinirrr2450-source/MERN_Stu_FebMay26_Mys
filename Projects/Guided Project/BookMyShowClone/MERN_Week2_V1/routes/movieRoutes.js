//handles request related to movie
const express = require("express")

const { authMiddleware } = require("../middleware/authMiddleware")

const {getHome,getAllMovies,getMovieById,addMovie,updateMovie,deleteMovie}=require("../controllers/movieController")

const roleMiddleware=require("../middleware/roleMiddleware")

const router = express.Router()
//sends req to home page
router.get("/",getHome)
//sends req to get all the movies available
router.get("/movies",getAllMovies)
//sends req to get /filter the movie based on ID
router.get("/movies/:id",getMovieById)

//sends req to add new movie or create a movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie)
//sends req to update a movie details
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie)
//sends req to delete a movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deleteMovie)

module.exports=router