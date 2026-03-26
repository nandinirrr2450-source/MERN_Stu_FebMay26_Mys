//Sending response in JSON Format

const http = require("http")

const server = http.createServer(function (req, res) {
    if (req.url === "/api/status" && req.method === "GET") {
        const reponseData={
            success: true,
            message:"API is working",
            server:"NodeJs HTTP Module"
        }
        //JSON responses using application/json
        res.writeHead(200,{"content-type":"application/json"})
        //JSON.stringify() converts JS object intoo JSON string
        res.end(JSON.stringify(reponseData))
        return
    }
    res.writeHead(404,{"content-type":"application/json"})
    res.end(JSON.stringify({success:false,message:" Route not Found.."}))
})

server.listen(3003,function(){
    console.log("Server is running at http://localhost:3003")

})