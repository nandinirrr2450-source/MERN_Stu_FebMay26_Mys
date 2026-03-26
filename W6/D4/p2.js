//Creating a simple http server

const http=require("http")

//createServer(): creates a http server instance
//Accepts a callback with two important objects
//1. req: incoming request details
//2. res: outgoing response control

const server=http.createServer(function(req,res){
    //writeHead() sets the response status code and headers
    res.writeHead(200,{"content-type":"text/plain"})

    //end() sends the response body and closes the response
    res.end("Hello from NodeJs HTTP server.")
})

//listen() binds the server to a port and starts accepting requesting
server.listen(3000,function(){
    console.log("Server is running at http://localhost:3000")

})
//port number 
//0-1023=>system ports or reserved ports
//1024-49151=> Registered ports
//27017=> used by mongoDB
