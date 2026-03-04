//using loop control
console.log("break")
for(let i=0;i<5;i++){//forward loop
    if(i===2){
        console.log("i value ",i)
        break;

    }
    
}

console.log("continue")
for(let i=0;i<5;i++){//forward loop
    if(i===2){
        continue;
    }
    console.log("i value ",i)
    
}