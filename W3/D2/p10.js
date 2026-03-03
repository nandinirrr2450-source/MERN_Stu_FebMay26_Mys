//call back function
function greetuser(name,callback){
    console.log("Hello,",name);
    callback();
}
greetuser("Nandini",function(){
    console.log("call back function executed");
});