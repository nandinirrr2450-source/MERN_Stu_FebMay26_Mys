//try catch basics
// const error = document.getElementById("error");

// //Refrence Error
// try{
//     console.log("trying to access undefined variable");
//     console.log(notdefined);
    
// }
// catch(err){
// //console.log("Error caught",err.name,"-",err.message);
// //or 
// error.innerHTML = "Error: " + err.name + " - " + err.message;
// }
// console.log("Program execution continues");

//JSON parsing error
// let jsonText="{json}";
// try{
//     let data=JSON.parse(jsonText);
//     console.log(data);
// }
// catch(err){
//     console.log("JSON parsing error : ",err.message)
// }

//Type Error
try{
    let num=10;
    num();
}
catch(err){
    console.log("Caught error : ",err.name)
}