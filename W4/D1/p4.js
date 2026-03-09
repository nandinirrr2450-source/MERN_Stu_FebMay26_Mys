//Logging 
console.log("Console Logging");
console.warn("warning message");
console.error("Error Message");

let users=[
    {id:1,name:"Amit"},
    {id:2,name:"Rohit"}
];
console.log(users)
console.table(users);

//Group related logs
console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();
console.log("Log 4");

//measure execution time
console.time("LoopTimer");
for(let i=0;i<1000;i++){
    
}
console.timeEnd("LoopTimer:")