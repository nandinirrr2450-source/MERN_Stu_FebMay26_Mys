//protecting roots with JWT middleware and role based access
const jwt = require("jsonwebtoken")
const express = require("express")
const app = express()

const secretKey = "donkey123"

const userToken = jwt.sign({ userId: 1, role: "user", email: "nandinirrr2450@gmail.com" }, secretKey, { expiresIn: "1h" })
console.log("UserToken : ",userToken)

const adminToken = jwt.sign({ userId: 2, role: "admin", email: "nandhurnayak@gmail.com" }, secretKey, { expiresIn: "1h" })
console.log("AdmibToken : ",adminToken)

function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(401).json({
            success: false,
            message: "Authorization header is missing"
        })
    }
    const token = authHeader.split(" ")[1]
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing"
        })

    }
    try {
        //verify the token and attach trusted user data
        req.user = jwt.verify(token, secretKey)
        next()
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Token has expired"
            })
        }
        return res.status(403).json({
            success:false,
            message:"Token is invalid"
        })
    }
}

function requireRole(role){
    return function(req,res,next){
        if(req.user.role!=role){
            return res.status(403).json({
            success:false,
            message:"Insufficiant permission"
        })
        }
        next()
    }
}

app.get("/me",authenticateToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user root accessed",
        user:req.user
    })
})

app.get("/admin",authenticateToken,requireRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"Protected user root accessed",
        user:req.user
    })
})

app.listen(4000,function(){
    console.log("JWT protected route server running at http://localhost:4000");
});

// D:\MERN\MERN_Stu_FebMay26_Mys\W7\D3>node p7.js
// UserToken :  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJuYW5kaW5pcnJyMjQ1MEBnbWFpbC5jb20iLCJpYXQiOjE3NzUwMzQ1NzksImV4cCI6MTc3NTAzODE3OX0.KsZ2kL0uhHj5ji2FqSrD-N4NhjH4QXdLFTISiTdLN9E
// AdmibToken :  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoibmFuZGh1cm5heWFrQGdtYWlsLmNvbSIsImlhdCI6MTc3NTAzNDU3OSwiZXhwIjoxNzc1MDM4MTc5fQ.fDNXFaabvs1wjRhaoMCC8sAKRAfWB98qkc3NTvkssas
// JWT protected route server running at http://localhost:4000


//take available usertoken copy and paste in another cmd 
// curl  http://localhost:4000/me -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJuYW5kaW5pcnJyMjQ1MEBnbWFpbC5jb20iLCJpYXQiOjE3NzUwMzQ1NzksImV4cCI6MTc3NTAzODE3OX0.KsZ2kL0uhHj5ji2FqSrD-N4NhjH4QXdLFTISiTdLN9E"

//this for admin
//curl  http://localhost:4000/me -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoibmFuZGh1cm5heWFrQGdtYWlsLmNvbSIsImlhdCI6MTc3NTAzNDU3OSwiZXhwIjoxNzc1MDM4MTc5fQ.fDNXFaabvs1wjRhaoMCC8sAKRAfWB98qkc3NTvkssas" 