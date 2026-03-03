//conditional statements
let age = 22
if(age<=18){
    console.log("Child")
}
else if(age<18){
    console.log("Teenager")
}
else{
    console.log("Adult")
}

//switch  statement
console.log("switch statements")
const day = "wednesday"
switch(day){
    case "monday":
        console.log("start of th week")
        break
    case "wednesday":
        console.log("mid of the week")
        break
    case "friday":
        console.log("end of work week")
        break
    default:
        console.log("some day in the week")
        break

}

//type conversion
let n = Number("ABC")
console.log("Type of n = ",typeof(n))
console.log(n,"isNaN",isNaN(n))

