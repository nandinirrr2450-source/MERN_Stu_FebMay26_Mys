//Breakpoint
//Inspect variable values
//View the call stack
//step through code line by line
//Evaluate expression in the console
//Watch how variables change during the execution
//To find logical errors
//browser
function calculateTotal(carts){
    let total=0;
    for(let i=0 ; i<carts.length; i++){
        //total=total+cart[i]
        let cart=carts[i];
        debugger;
        total+=cart;
        
    }
    return total
}
let carts = [100,250,150,1000,1120,560]
console.log("total= ",calculateTotal(carts));
