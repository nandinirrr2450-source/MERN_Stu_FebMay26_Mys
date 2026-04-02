//Basics of cookies
const express=require("express")
const app=express()

app.get("/set-theme",function(req,res){
    //res.cookie is a function to tell the browser to store a cookie
    res.cookie("theme","dark")

    res.send("cookie named 'theme' with value 'dark was sent to the browser")
})
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
//inspect=>application=>cookies=>localhost