//Main file from where the project begins
const readline = require("readline");
const chalk = require("chalk");

const movies = require("./movies");
const bookingEmitter = require("./events");
const {
  validateMovieSelection,
  validateTimeSelection,
  validateSeatCount,
} = require("./validator");

const { getCurrentBooking, processBookingAsync } = require("./booking");

const { cancelBooking } = require("./cancel");

//new
const {
  ensureDirectories, 
  initializeBookingsFileSync,
  readBookingSync, 
  listDataFilesSync, 
  renameLogFileSync, 
  deleteArchivedLogSync, 
} = require("./fileManager"); 

const MAX_ATTEMPTS = 3;
let invalidAttempts = 0;

ensureDirectories(); //new
initializeBookingsFileSync(); //new

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Event Listeners
bookingEmitter.on("bookingStarted", () => {
  console.log(chalk.blue("Booking process started."));
});

bookingEmitter.on("bookingValidated", () => {
  console.log(chalk.cyan("Booking validated successfully."));
});

bookingEmitter.on("bookingConfirmed", (booking) => {
  console.log(chalk.green("\nBooking Confirmed."));
  console.log(chalk.green(`Booking Id: ${booking.bookingId}`));
});

//new
bookingEmitter.on("bookingSaved", (booking) => {
  console.log(chalk.green(`Booking saved to file: ${booking.bookingId}`)); 
}); 

bookingEmitter.on("bookingCancelled", (booking) => {
  console.log(
    chalk.yellow(
      `Booking Cancelled for Id: ${booking.movieTitle} at ${booking.time}`,
    ),
  );
});

bookingEmitter.on("bookingFailed", (error) => {
  console.log(chalk.red(`Booking failed: ${error}`));
});

//Helper functions
function displayMovies() {
  console.log(chalk.magenta("\nAvailable Movies"));

  movies.forEach((movie) => {
    console.log(chalk.bold(`\n${movie.id}.${movie.title}`));
    movie.showtimes.forEach((show) => {
      console.log(`-${show.time} | Seats Available: ${show.seatsAvailable}`);
    });
  });
}

function handleInvalidAttempt(message) {
  invalidAttempts++;
  console.log(chalk.red(`\n${message}`));
  console.log(chalk.yellow(`Attempts left:${MAX_ATTEMPTS - invalidAttempts}`));

  if (invalidAttempts >= MAX_ATTEMPTS) {
    console.log(chalk.red("\nMax invalid attempts reached. Exiting app."));
    rl.close();
    return true;
  }
  return false;
}

function viewCurrentBooking() {
  const booking = getCurrentBooking();
  if (!booking) {
    console.log(chalk.yellow("\n No Booking found."));
    return;
  }
  console.log(chalk.green("Booking details"));
  console.log(`Booking id: ${booking.bookingId}`);
  console.log(`Movie: ${booking.movieTitle}`);
  console.log(`Time: ${booking.time}`);
  console.log(`Seats: ${booking.seatCount}`);
}

// new code V2.0 
function viewSavedBookings() {
  const bookings = readBookingSync();

  if (!bookings.length) {
    console.log(chalk.yellow("\nNo saved bookings found in file."));
    return;
  }

  console.log(chalk.green("\nSaved Bookings From File:"));
  console.dir(bookings, { depth: null });
}

function showDataFiles() {
  const files = listDataFilesSync();
  console.log(chalk.cyan("\nFiles inside data/:"));
  console.log(files);
}

function archiveLogFile() {
  const result = renameLogFileSync();
  console.log(
    result
      ? chalk.green("\nLog file renamed to booking-archived.log")
      : chalk.yellow("\nNo log file found to rename."),
  );
}

function deleteArchivedLog() {
  const result = deleteArchivedLogSync();
  console.log(
    result
      ? chalk.green("\nArchived log file deleted successfully.")
      : chalk.yellow("\nNo archived log file found to delete."),
  );
}

//End of New code V2.0 

function showMenu() {
  console.log(chalk.blue("Movie Ticket Booking System"));
  console.log("1. View Movies |2.Book Tickets |3.View Booking");
  console.log("4. Cancel Booking |5.Re-Book Tickets");
  console.log("6. View saved bookings from file"); //new
  console.log("7. View data directory files"); //new
  console.log("8. Rename log file"); //new
  console.log("9. Delete archived log file"); //new
  console.log("10. Exit"); //new

  rl.question("\nEnter your choice:", handleMenuChoice);
}
function handleMenuChoice(choice) {
  switch (choice.trim()) {
    case "1":
      displayMovies();
      showMenu();
      break;
    case "2":
      startBookingFlow();
      break;
    case "3":
      viewCurrentBooking();
      showMenu();
      break;
    case "4":
      cancelBooking(movies).then(() => showMenu()); //new
      break;
    case "5":
      if (!getCurrentBooking()) {
        console.log(chalk.yellow("No booking available."));
        showMenu();
      } else {
        cancelBooking(movies);
        startBookingFlow();
      }
      break;
    case "6": //new
      viewSavedBookings(); 
      showMenu(); 
      break; 

    case "7": //new
      showDataFiles(); 
      showMenu(); 
      break; 

    case "8": //new
      archiveLogFile(); 
      showMenu(); 
      break; 

    case "9": //new
      deleteArchivedLog(); 
      showMenu(); 
      break; 

    case "10": //new
      console.log(chalk.green("\nThank you for using the Movie Ticket Booking System."),);
      rl.close();
      break;

    default:
      if (!handleInvalidAttempt("Invalid menu choice.")) {
        showMenu();
      }
      break;
  }
}

function startBookingFlow() {
  displayMovies();
  rl.question("\nEnter movieId: ", (movieIdInput) => {
    const movieId = Number(movieIdInput);

    validateMovieSelection(movies, movieId, (movieError, selectedMovie) => {
      if (movieError) {
        if (!handleInvalidAttempt(movieError)) {
          startBookingFlow();
        }
        return;
      }
      rl.question("Enter time slot as displayed:", (timeInput) => {
        validateTimeSelection(
          selectedMovie,
          timeInput,
          (timeError, selectedShowtime) => {
            if (timeError) {
              if (!handleInvalidAttempt(timeError)) {
                startBookingFlow();
              }
              return;
            }

            rl.question("Enter no. of seats: ", async (seatInput) => {
              const seatCount = Number(seatInput);
              validateSeatCount(
                seatCount,
                async (seatError, validSeatCount) => {
                  if (seatError) {
                    if (!handleInvalidAttempt(seatError)) {
                      startBookingFlow();
                    }
                    return;
                  }
                  try {
                    const booking = await processBookingAsync(
                      selectedMovie,
                      selectedShowtime,
                      validSeatCount,
                    );
                    console.log(chalk.green("Booking Details"));
                    console.log(`Booking id: ${booking.bookingId}`);
                    console.log(`Movie: ${booking.movieTitle}`);
                    console.log(`Time: ${booking.time}`);
                    console.log(`Seats: ${booking.seatCount}`);
                    invalidAttempts = 0;
                    showMenu();
                  } catch (error) {
                    if (!handleInvalidAttempt(error)) {
                      showMenu();
                    }
                  }
                },
              );
            });
          },
        );
      });
    });
  });
}
showMenu();