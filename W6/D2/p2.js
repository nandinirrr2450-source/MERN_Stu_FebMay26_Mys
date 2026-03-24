//Js handles asynchronous task in NodeJs
//in case of js if we write both synchronous and asynchronous 
//js first executes synchronous by the time asynchronous will register after registeration asynchronous will execute
function fetchReport(callback){
    console.log("Fetching report data...")

    //asynchronous
    setTimeout(()=>{
        const report="Monthly report is ready";
        callback(report)
    },1000)
}

fetchReport(function(reportMessage){
    console.log(reportMessage)
})

console.log("Application continues to execute further")