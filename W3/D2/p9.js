//Immediately invoked function expression(IIFE)

//without  parameter
(function(){
    console.log("Basic IIFE executed immediately");
})();

//with parameter
(function(appname,version){
    console.log("appname="+appname+" version="+version);
})("nodejs","v22.22.0");


//with return value
const result = (function(){
    const a=10;
    const b=20;
    return a+b;
})();
console.log("Sum is = "+result)
