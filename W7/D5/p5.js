//Assigning roles to users and restricting access
const express=require("express")
const app=express()

app.use(function(req,res,next){
    req.user={
        id:101,
        username:"Nandini",
        role:"admin"
    }
    next()
})
//checking permission
function requiredRole(role){
    return function(req,res,next){
        if(!req.user){
            return res.status(401).json({
                success:false,
                message:"Authentication required"
            })
        }
        if(req.user.role!==role){
            return res.status(403).json({
                success:false,
                message:"insufficient permission"
            })
        }
        next()
    }
}

app.get("/profile",function(req,res){
    res.json({
        success:true,
        message:"Profile Page",
        user:req.user
    })
})

app.get("/admin",requiredRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"Admin Page",
        user:req.user
    })
})


app.listen(4000,function(){
    console.log("EXpress session demo server running at http://localhost:4000");
});