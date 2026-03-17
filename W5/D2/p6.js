//callback nesting
console.log("starting nested callback flow");

setTimeout(function(){
    console.log("step1: user loaded.");

    setTimeout(function(){
        console.log("step2: orders loaded.");

        setTimeout(function(){
            console.log("step3: payments loaded.");

            setTimeout(function(){
                console.log("step4: shipment loaded.");
                console.log("We are in callback hell!!!!");
            },1000)
        },8000)
    },60)
},4000)

