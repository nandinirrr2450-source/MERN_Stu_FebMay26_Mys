// Handling of error event in EventEmitter
//step 0
const EventEmitter=require("events")
//step 1
const fileEmitter= new EventEmitter()
//step 2
//register an error listener: error scenario
fileEmitter.on("error",function(errorMessage){
    console.log("Emitter handler error",errorMessage)
})

//normal event listener: happy scenario
fileEmitter.on("fileProcessed",function(fileName){
    console.log("File processed succesfully ",fileName)
})

fileEmitter.emit("fileProcessed","report.csv")
fileEmitter.emit("error","File processing failed.")