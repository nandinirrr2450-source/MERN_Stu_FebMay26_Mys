//Session security,regeneration,expiration and logout
const express=require("express")
const session=require("express-session")
const app=express()

app.use(session({
    secret:"MySecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*1000,
        httpOnly:true,
        secure: process.env.NODE_ENV =="production"
    }
}))

app.get("/login",function(req,res){
    req.session.regenerate(function(error){
        if(error){
            return next(error)
        }
        req.session.user={
        id:201,
        username: "Nandini",
        role:"student"
    }
    res.send("session regenerated  & details stored after login")

    })
    
})

app.get("/profile",function(req,res){
    if(!req.session.user){
        return res.status(401).json({
            success:false,
            message:"no active login session form"
        })
    }
    res.json({
        success:true,
        sessionUSer:req.session.user
    })
})

app.get("/logout",function(req,res,next){
    req.session.destroy(function(error){
        if(error){
            return next(error) //next(error) moves to centralized middleware
        }
        res.clearCookie("connect.sid")
        res.send("session destroyed and cookie cleared.")
    })

})

//centralized middleware 
app.use(function(error,req,res,next){
    res.status(500).json({
        success:false,
        message:error.message
    })
})

app.listen(4000,function(){
    console.log("EXpress session demo server running at http://localhost:4000");
});
