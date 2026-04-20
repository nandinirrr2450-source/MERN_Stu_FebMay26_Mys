// express app configuration file

const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

app.use(
    session({
        secret: "mysession",
        resave: false,
        saveUninitialized: true
    })
);

// logger (simple)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// routes
app.use("/auth", authRoutes);

// default route
app.get("/", (req, res) => {
    res.send("Server is running...");
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || "Something went wrong"
    });
});

module.exports = app;