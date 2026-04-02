//JWT flow with login,refresh-style ,login and secure verification
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();

app.use(express.json());

const secretKey = "MySecretKey";
const refreshsecretKey = "YourSecretKey";

//in-memory storage for refresh token
const refreshTokens = [];


function authenticationAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token missing"
        });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        console.log("Access Token Error:", error.message);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token"
        });
    }
}


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (email !== "email@email.com" || password !== "pass@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });
    }

    const accessToken = jwt.sign(
        { userId: 101, email, role: "member" },
        secretKey,
        { expiresIn: "10m" }
    );

    const refreshToken = jwt.sign(
        { userId: 101, email },
        refreshsecretKey,
        { expiresIn: "10d" }
    );

    refreshTokens.push(refreshToken);

    res.json({
        success: true,
        accessToken,
        refreshToken
    });
});

app.post("/refresh", (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(401).json({
            success: false,
            message: "Refresh token required"
        });
    }

    if (!refreshTokens.includes(refreshToken)) {
        return res.status(403).json({
            success: false,
            message: "Invalid refresh token"
        });
    }

    try {
        const decoded = jwt.verify(refreshToken, refreshsecretKey);

        const newAccessToken = jwt.sign(
            {
                userId: decoded.userId,
                email: decoded.email,
                role: "member"
            },
            secretKey,
            { expiresIn: "15m" }
        );

        res.json({
            success: true,
            accessToken: newAccessToken
        });
    } catch (error) {
        console.log("Refresh Token Error:", error.message);

        return res.status(403).json({
            success: false,
            message: "Refresh token expired or invalid"
        });
    }
});

app.get("/me", authenticationAccessToken, (req, res) => {
    res.json({
        success: true,
        user: req.user
    });
});

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});
//in another terminal for login initially  
//curl -X POST http://localhost:4000/login -H "content-type:application/json" -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}"

//copy refreshtoken from login and paste 
//curl -X POST http://localhost:4000/refresh -H "content-type:application/json" -d "{\"refreshToken\":\"(this onwards are from previous refreshToken)eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJpYXQiOjE3NzUxMTI4NTMsImV4cCI6MTc3NTk3Njg1M30.V1KdJqFOxylXKGeFO-yW7y5wYIV74c-qHwZ1l_hovzM\"}"

//copy access-token from refresh and paste after Bearer
//curl http://localhost:4000/me -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEyOTMyLCJleHAiOjE3NzUxMTM4MzJ9._SHJAs2E-Pf9U7jqR2VKfAull5dFzzSTBqIE3Goeh9Q"