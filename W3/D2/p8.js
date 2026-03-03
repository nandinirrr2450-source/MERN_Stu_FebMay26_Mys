//default parameters
function product (a=1,b=1){
    return a*b
}
console.log("product of 15 and 4 = ",product(15,4))
console.log("product of 15  = ",product(15))

//Rest parameters
function sumofall(...numbers){
    console.log(...numbers)
}
sumofall(1,2,3,4,5,6,7)
