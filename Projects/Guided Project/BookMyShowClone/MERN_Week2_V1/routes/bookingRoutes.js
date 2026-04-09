//handling requests related to routing
const express = require("express")

const { authMiddleware } = require("../middleware/authMiddleware")

const roleMiddleware=require("../middleware/roleMiddleware")

const router = express.Router()

const {bookingValidationHandler,createBooking,getAllBookings,getMyBookings}=require("../controllers/bookingController")

//create a booking or to book a ticket
router.post("/bookings",authMiddleware,bookingValidationHandler,createBooking)

router.get("/bookings/me",authMiddleware,getMyBookings)

router.get("/bookings",authMiddleware,roleMiddleware("admin"),getAllBookings)

module.exports=router