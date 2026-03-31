//Built-in Middleware
const express = require("express");

const app = express();
app.use(express.json())

//express.urlencoded=>used to parse form-style data
//extended:false=>its a begginer friendly configuration
app.use(express.urlencoded({extended:false}))

app.post("/api/users",function(req,res){
    res.status(201).json({
        success:true,
        parseBody: req.body
    });
});

app.post("/form",function(req,res){
    res.json({
        success:true,
        FormData: req.body
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
//curl -X POST http://localhost:4000/form -H "content-type:application/x-www-form-urlencoded" -d "name=Nandini&role=admin" =>comand used for form data

//curl -X POST http://localhost:4000/api/users -H "content-type:application/json" -d "{\"name\":\"Nandini\",\"role\":\"admin\"}" =>comand for json data