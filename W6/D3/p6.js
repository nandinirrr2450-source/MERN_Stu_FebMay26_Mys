//directory(folder) operations : mkdir , readdir and rmdir/rm
const fs=require("fs")
const path=require("path")

const demoDir = path.join(__dirname, "demo-folder")

//to create folder
fs.mkdirSync(demoDir,{recursive:true})

//to create files inside folder and write in it
fs.writeFileSync(path.join(demoDir,"File1.txt"),"File1 content")
fs.writeFileSync(path.join(demoDir,"File2.txt"),"File2 content")

//to check files inside folder
const entries = fs.readdirSync(demoDir)
console.log("directory contents: ",entries)

//to delete the folder
//recursive: true using this it can able to delete the folder inside folder
//force:true using this in case of exception it wont through error as file dont exit 
fs.rmSync(demoDir,{recursive: true,force:true})
console.log("Does directory demo-folder exits?",fs.existsSync(demoDir));