// middleware to check jwt and protect routes

const jwt = require("jsonwebtoken");

const SECRET = "secret123";

const protect = (req, res, next) => {
    let token;

    // from header
    if (req.headers.authorization) {
        token = req.headers.authorization.split(" ")[1];
    }

    // from cookie
    if (!token && req.cookies.token) {
        token = req.cookies.token;
    }

    if (!token) {
        return res.status(401).json({
            message: "Not authorized"
        });
    }

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = protect;