//Authorization with JWT and RBAC 
const express=require("express")
const jwt=require("jsonwebtoken")

const app=express()
const secretKey="monkey@123"


const userToken=jwt.sign({
    userId:101,
    role:"user",
    email:"u@e.com"
},secretKey,{expiresIn:"1h"}
)

const managerToken=jwt.sign({
    userId:102,
    role:"manager",
    email:"m@e.com"
},secretKey,{expiresIn:"1h"}
)

const adminToken=jwt.sign({
    userId:103,
    role:"admin",
    email:"a@e.com"
},secretKey,{expiresIn:"1h"}
)

console.log("User token: ",userToken)
console.log("Manager token: ",managerToken)
console.log("Admin token: ",adminToken)

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
        req.user = jwt.verify(token, secretKey);
        next();
    } catch (error) {
        console.log("Access Token Error:", error.message);

        return res.status(401).json({
            success: false,
            message: "Invalid or expired access token"
        });
    }
}

function requireAnyRole(allowedRoles){
    return function(req,res,next){
        if(!req.user){
            return res.status(401).json({
                success:false,
                message:"Authentication required"
            })
        }
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                success:false,
                message:"insufficient permission"
            })
        }
        next()
    }
}
//creation of api
app.get("/me",authenticationAccessToken,function(req,res){
    res.json({
        success:true,
        user:req.user,
        message:"Accessing My Page"
    })
})

app.get("/admin",authenticationAccessToken,requireAnyRole(["admin"]),function(req,res){
    res.json({
        success:true,
        message:"Admin Page",
        user:req.user
    })
})

app.get("/profile",authenticationAccessToken,requireAnyRole(["admin","manager"]),function(req,res){
    res.json({
        success:true,
        message:"Profile Page",
        user:req.user
    })
})

app.listen(4000,function(){
    console.log("EXpress session demo server running at http://localhost:4000");
});

