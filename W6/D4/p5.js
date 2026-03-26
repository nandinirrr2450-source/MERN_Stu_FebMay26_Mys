//Reading POST request body data

const http = require("http")

const server = http.createServer(function (req, res) {
    if (req.url === "/submit" && req.method === "POST") {
        let body = ""
        //req here is readable stream
        req.on("data", function (chunk) {
            body += chunk.toString()
        })

        //"end" executes when the full request body has been received
        req.on("end", function () {
            res.writeHead(200, { "content-type": "text/plain" })
            res.end("Received req body data: " +body)
        })
        return
    }
    res.writeHead(404,{"content-type":"text/plain"})
    res.end("Route not Found..")
})

server.listen(3003,function(){
    console.log("Server is running at http://localhost:3003")

})

//curl -X POST http://localhost:3003/submit -d "name=Nandini&role=admin" 
//if add data to req body
//Received req body data: name=Nandini&role=admin


