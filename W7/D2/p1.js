//Routing : Nested routes
// "/" base url
// "/api/users"

const express = require("express");

const app = express();

//Router objects help organize route Groups
const apiRouter=express.Router()

apiRouter.get("/users",function(req,res){
    res.json({
        route: "/api/users",
        message: "Users route inside api router"
    })
})

apiRouter.get("/orders",function(req,res){
    res.json({
        route: "/api/orders",
        message: "Orders route inside api router"
    })
})
//Mount the router under the /api base path
app.use("/api",apiRouter);

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});


//  New Router /
//products router (handles/api/products/...)
const productsRouter=express.Router()

// /api/products  =>create product
productsRouter.post("/",(req,res)=>{
    res.json({
        route: "/api/products",
        message: "Create products"
    })
})

// /api/products/:id   =>delete product
productsRouter.delete("/:id",(req,res)=>{
    res.json({
        route: `/api/products/${req.params.id}`,
        message: "Delete product"
    })
})

// mount products router under /api/products
apiRouter.use("/products",productsRouter)

//to create data 
// curl -X POST http://localhost:4000/api/products -H "content-type:application/json" -d "{"name":"Nandini","age":"22"}"
// or
//curl -X POST http://localhost:4000/api/products -H "content-type:application/json" -d "{\"name\":\"Nandini\",\"role\":\"admin\"}"
//to delete 
// curl -X DELETE  http://localhost:4000/api/products/12