//Reading and writing file synchronously
const fs=require("fs")
const path= require("path")

const filePath=path.join(__dirname,"sync-note.txt")

fs.writeFileSync(filePath,"This file was written using writeFileSync().\nSynchronous operation block")

console.log("file written synchronously.")

//for read operation
const content = fs.readFileSync(filePath,"utf-8")

console.log("File read synchronously.")
console.log(content)