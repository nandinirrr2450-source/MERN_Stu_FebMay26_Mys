//promise states: pending,fulfilled,rejected
const fulfilledPromise = new Promise(function(monkey){
    console.log("fulfilledPromise is pending");

    setTimeout(function(){
        monkey("fulfilledPromise is fulfilled.");
    },1000);
});

const rejectedPromise = new Promise(function(resolve,monkey){
    console.log("rejectedPromise is pending.");
    setTimeout(function(){
        monkey("rejectedPromise is rejected.");
    },1500);
});

fulfilledPromise.then(function(message){
    console.log(message);
});
rejectedPromise.catch(function(message){
    console.log(message);
})