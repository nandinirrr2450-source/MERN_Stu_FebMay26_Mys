//Handling different GET routes

const http=require("http")
const server=http.createServer(function(req,res){
    if(req.method==="GET" && req.url==="/"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Home Page / Dashboard")
        return
    }

    if(req.method==="GET" && req.url==="/about"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("About Route. Welcome to About Us Page")
        return
    }

    if(req.method==="GET" && req.url==="/products"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Products Route. Welcome to Products Page")
        return
    }

    if(req.method==="GET" && req.url==="/users"){
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Returning all users.")
        return
    }
    //curl -X POST http://localhost:3002/users 
    //curl: client URL: free open src CLI tool used to transfer data to or from a server using various network protocol 
    if(req.method==="POST" && req.url==="/users"){
        res.writeHead(201,{"content-type":"text/plain"})
        res.end("New user Created")
        return
    }

    //Unknown route fallback
    res.writeHead(404,{"content-type":"text/plain"})
    res.end("Route not found.")
})

server.listen(3002,function(){
    console.log("Server is running at http://localhost:3002")

})
