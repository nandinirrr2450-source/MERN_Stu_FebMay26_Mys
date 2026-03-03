//Higher order function
// a function which takes another function as parameter 
//or
// a function returns another function

function createmultiplier(factor){
    return function(number){
        return number*factor;
    }
}
let double =createmultiplier(2);
console.log("double(15) is ",double(15))
let triple =createmultiplier(3);
console.log("triple(15) is ",triple(15))