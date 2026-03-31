//Route parameters and query parameters

const express=require("express")
const app=express()

app.get("/products/:id",function(req,res){
    res.json({
        routeparameter: req.params.id,
        queryParameter:req.query
    })
})

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});

//http://localhost:4000/products/2?name=nandini&role=admin
