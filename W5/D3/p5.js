//An async function always returns a Promise
async function getStatusMessage(){
    return "Order is ready"
}
const result = getStatusMessage();

console.log("Is this Returned value a promise?",result instanceof Promise);

result.then(function(message){
    console.log("resolved values: ",message);
})