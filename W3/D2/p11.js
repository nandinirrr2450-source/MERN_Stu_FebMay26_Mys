//Recursive function approach
function factorial(n){
    if(n<=1){
        return 1;
    }
    return n*factorial(n-1)
}
console.log("factor of 2= ",factorial(2));
console.log("factor of 3= ",factorial(3));
console.log("factor of 4= ",factorial(4));
console.log("factor of 5= ",factorial(5));