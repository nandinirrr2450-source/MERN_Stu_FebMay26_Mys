console.log("Node JS Architecture demo")
console.log("1. Script Started")

//setTime out
setTimeout(()=>{
    console.log("3. Timer callback finished after waiting");
},10000);

console.log("2. script continued without waiting timer callback")

