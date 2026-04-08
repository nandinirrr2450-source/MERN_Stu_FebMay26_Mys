//Middleware to create and/or verify JWT token
const jwt=require("jsonwebtoken")
const customError=require("../utils/customError")

const JWT_SECRET="TumbhaSecret"

function authMiddleware(req,res,next){
    try{
        const authHeader=req.headers.authorization
        const tokenFromHeader=authHeader && authHeader.startsWith("Bearer")?authHeader.split(" ")[1]:null //? this works as if condition like if bearer found execute after that if not then it is null
        const token=tokenFromHeader || req.cookies.token

        if(!token){
            return next(new customError("Access denied. Token not provided",401))
        }
        const decoded=jwt.verify(token,JWT_SECRET)
        req.user=decoded
        next()
    }
    catch(error){
        next(new customError("Access denied. Expired Token",401))
    }
}
module.exports={
    authMiddleware,
    JWT_SECRET
}