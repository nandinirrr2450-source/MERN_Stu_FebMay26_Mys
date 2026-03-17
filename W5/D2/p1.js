//Introduction to callback function
function greetUser(name,monkey){
    console.log("Hello, " +name);
    //callback function executed only after the execution of current function

    monkey();
}
function showCompletionMessage(){
    console.log("The greeting task is complete.")
}
greetUser("Nandini",showCompletionMessage)