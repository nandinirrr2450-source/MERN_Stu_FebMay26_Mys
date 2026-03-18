//Intoduction to async/await
function getMessage(){
    return new Promise(function(monkey){
        setTimeout(()=>{
            monkey("Async/await makes promised based code easier to read")
        },1000)
    })
}
async function showMessage(){
    console.log("Loading Message.....")
    const message=await getMessage()
    console.log(message)
}
showMessage()