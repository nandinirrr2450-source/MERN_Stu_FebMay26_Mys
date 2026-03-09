//Throw Custom error
// function divide(a,b){
//     if (b===0){
//         throw new Error("Cannot divide by zero");
        
//     }
//     return a/b;
// }
// try{
//     //console.log(divide(10,1));
//     console.log(divide(10,0));
// }
// catch(err){
//     console.log("Caught error: ",err.message);
// }

// function checkAge(age){
//     if (age<18){
//         throw new Error("Age must be 18 or above");
        
//     }
//     console.log("eligible for voting");
//     return age;
// }
// try{
//     //console.log(checkAge(25));
//     console.log(checkAge(10));
// }
// catch(err){
//     console.log("Caught error: ",err.message);
// }

//create a custom error class
class validationError extends Error{
    constructor(message){
        super(message);
        this.name="validationError";
    }

}
function createUser(name){
    if (!name){
        throw new validationError("Name is required");
    }
    return {name};
}
try{
    console.log(createUser("Nandini"));
    //console.log(createUser());
}
catch(err){
    console.log("Caught error: ",err.message);

}