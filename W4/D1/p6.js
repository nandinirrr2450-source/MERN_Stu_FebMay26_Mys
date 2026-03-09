//finally 
// function example1(){
//     try{
//         console.log("example in try block");
//         return "TRY-RETURN"
//     }
//     finally{
//         console.log("finally is printed ");
//     }
// }
// console.log("Example result: ",example1())

//return in catch block and still not finally skipping
function example2() {
    try {
        try {
            throw new Error("New Error");
        }
        catch (err) {
            console.log("Example2 : caught error");
            //return 10;
            throw (e);
        }
        finally {
            console.log("Example2 : finally still runs");
        }
    }
    catch (e) {
        console.log("Example 2 outer catch",e.message);
        

    }
}
console.log("Example result: ", example2())