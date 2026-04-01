//Generating token using login function and verifying token
const jwt = require("jsonwebtoken")

const secretKey = "donkey123"

//const wrongsecretKey = "donkey123" //it will become invalid token
function loginUser(email, password) {
    if (email === "nandinirrr2450@email.com" && password === "Nandini@123") {
        const token = jwt.sign({
            userId: 101,
            email: email,
            role: "student"
        }, secretKey, { expiresIn: "1h" })
        return {
            success: true,
            token: token
        }
    }
    return {
        success: false,
        message: "Invalid Credentials"
    }

}

// const loginResult=loginUser("hello@gmail.com","nanuGothilva")
// console.log("login Results :",loginResult)

const loginResult = loginUser("nandinirrr2450@email.com", "Nandini@123")
console.log("login Results :", loginResult)

if (loginResult.success) {
    try {
        //jwt.verify() checks trust,signature and expiration
        const verifiedPayload = jwt.verify(loginResult.token, secretKey)
        //const verifiedPayload=jwt.verify(token,wrongsecretKey)  //it will become invalid token
        console.log("verified Payload: ", verifiedPayload)
    }
    catch (error) {
        console.log("verification failed: ", error.message)
    }
}