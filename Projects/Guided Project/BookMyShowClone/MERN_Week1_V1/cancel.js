//cancellation of booked tickets if exists
const bookingEmitter=require("./events")
const {getCurrentBooking,clearCurrentBooking}=require("./booking")

function cancelBooking(){
    const booking=getCurrentBooking()

    if(!booking){
        bookingEmitter.emit("booking failed","No booking found to cancel.")
        return null
    }
    const movie=movies.find((m)=>m.id===booking.movieId)
    if(!movie){
        bookingEmitter.emit("booking failed","Movie data not found while cancelling booking")
        return null
    }

    const showtime=movie.showtimes.find((show)=>show.time.toLowerCase()===booking.time.toLowerCase())
    if(!showtime){
        bookingEmitter.emit("booking failed","showtime data not found")
        return null
    }

    //restore seats
    showtime.seatsAvailable+=booking.seatCount

    //clearing current booking
    clearCurrentBooking()

    bookingEmitter.emit("booking Cancelled",booking)

    return booking
}

module.exports={
    cancelBooking
}