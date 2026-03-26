//Parsing JSON request bodies

const http=require("http")

const server=http.createServer(function(req,res){
    if(req.method==="POST" && req.url==="/api/users"){
        let body=""

        req.on("data",function(chunk){
            body += chunk.toString()
        })

        req.on("end",function(){
            try{
                const parsed=JSON.parse(body)
                res.writeHead(201,{"content-type":"application/json"})
                res.end(JSON.stringify({
                    success:true,
                    received:parsed
                }))
            }
            catch(error){
                res.writeHead(400,{"content-type":"application/json"})
                res.end(JSON.stringify({
                    success:false,
                    message:"Invalid  json body"
                }))
            }
        })
        return
    }

    res.writeHead(404,{"content-type":"application/json"})
    res.end(JSON.stringify({success:false,message:" Route not Found.."}))

})

server.listen(3003,function(){
    console.log("Server is running at http://localhost:3003")

})


//curl -X POST http://localhost:3003/api/users -H "content-type:application/json" -d "{\"name\":\"Nandini\",\"role\":\"admin\"}"