//for loop
console.log("For loop examples")
console.log("Forward loop")
for(let i=0;i<5;i++){//forward loop
    console.log("i value ",i)
}
console.log("backward loop ")
for(let i=5;i>0;i--){//backward loop
    console.log("i value ",i)
}

console.log("Nested For loop")
for(let i=1;i<=3;i++){
    for(let j=1;j<=2;j++){
        console.log(`i=${i},j=${j}`);
        //console.log("i = "+i+" j = "+j)//prints same

    }
}