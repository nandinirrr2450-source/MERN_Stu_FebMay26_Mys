//File upload using Multer: with file type, file size restrictions
const express=require("express")
const multer=require("multer")

async function main() {
    try{
        const app=express()
        //mimetype: used to get to know format of file
        const filefilter=(req,res,callback)=>{
            if(filefilter.mimetype==="image/png" || filefilter.mimetype==="image/jpeg"){
                callback(null,true)
            }
            else{
                callback(new Error("only png and jpeg images are allowed."),false)
            }
        }

        //Approach 1: Using dest (destination) 
        const uploadWithDest=multer({
            dest:"uploads/",
            limits:{fileSize: 1024*1024*2}, // means 2MB ,1024=>1mb
            filefilter
        })

        //"upload-dest",uploadWithDest.single("file") creates "upload-dest" file first and then function uploadWithDest is called only single file 
        app.post("upload-dest",uploadWithDest.single("file"),(req,res)=>{
            res.send({
                message:"uploaded using dest approach",
                note:"Filename is random, no extension preserved",
                file:req.file 
            })
        })

        app.listen(3000,()=>{
            console.log("Server started on port https://localhost:3000")
            console.log("POST/upload-dest")
        })
    }
    catch(error){
        console.log("Error:",error.message)
    }
}
main()
//npm init -y
//npm install express multer