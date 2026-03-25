//Introduction to the Node.js file system (fs) built-in module

const fs=require("fs")

const fsPromise=require("fs/promises")

console.log("Type of fs.readfile: ",typeof fs.readFile)
console.log("Type of fs.writefile: ",typeof fs.writeFile)

console.log("Type of fsPromises.readfile: ",typeof fsPromise.readFile)
console.log("Type of fsPromises.writefile: ",typeof fsPromise.writeFile)