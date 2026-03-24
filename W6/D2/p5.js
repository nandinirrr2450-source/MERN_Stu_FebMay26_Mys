//Microtasks and Macrotasks
console.log("1. Synchronous start.")

//Promise.resolve(.....).then((.....) schedule a microtask 
//higher priority
Promise.resolve().then(function(){
    console.log("3. Promise microtask executed.")
}) 
//setTimeout(...,0) schedules task for a later time 
//Even when delay is 0 ,it waits for sychronous code to execute first
setTimeout(()=>{
    console.log("4. Timer callback executed.")
},0)


console.log("2. Synchronous end")