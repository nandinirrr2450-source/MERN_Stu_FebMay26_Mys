//Event loop with multiple asynchronous tasks
console.log("Main script started")

setTimeout(()=>{
    console.log("Timer A finised after 500ms")
},500)

setTimeout(()=>{
    console.log("Timer B finised after 100ms")
},100)

setTimeout(()=>{
    console.log("Timer C finised after 0ms,but still waits for sync code to complete")
},0)

console.log("Main script ended")