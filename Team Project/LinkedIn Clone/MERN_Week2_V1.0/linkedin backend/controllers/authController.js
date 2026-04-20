//register and login logic with jwt

const users = require("../data/users");
const jwt = require("jsonwebtoken");

const SECRET = "secret123";

// register
const registerUser = (req, res) => {
    const { email, password } = req.body;

    // basic validation
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password required"
        });
    }

    // check if user exists
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const newUser = {
        id: Date.now().toString(),
        email,
        password
    };

    users.push(newUser);

    res.status(201).json({
        message: "User registered successfully"
    });
};

// login
const loginUser = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign(
        { id: user.id },
        SECRET,
        { expiresIn: "1h" }
    );

    // store in cookie
    res.cookie("token", token, {
        httpOnly: true
    });

    res.json({
        message: "Login successful",
        token
    });
};

module.exports = {
    registerUser,
    loginUser
};