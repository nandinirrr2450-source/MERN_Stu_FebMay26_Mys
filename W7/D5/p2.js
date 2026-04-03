//Manage sessions with express-session

const express=require("express")
const session=require("express-session")
const app=express()

app.use(session({
    secret:"MySecretKey",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:60*60*1000
    }
}))
//assuming user logged in and session created
app.get("/login",function(req,res){
    req.session.user={
        id:201,
        username: "Nandini",
        role:"student"
    }
    res.send("session details stored after login")
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

app.listen(4000,function(){
    console.log("EXpress session demo server running at http://localhost:4000");
});