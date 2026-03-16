//Intoduction to Node.js

const runtimeName="Node.js";
// console.log("Introduction to Node.js");
console.log(`${runtimeName} runs javascript outside browser`);

const commonUses=["used for server-side app","automation scripts can be created"];
//array destructuring==>deconstruct array into indivisual array
// console.log(commonUses[0])
// console.log(commonUses[1])


// for(let i=0;i<commonUses.length;i++){
//     console.log(commonUses[i])
// }

commonUses.forEach((commonUses,index)=>{
    console.log(`${index+1}.${commonUses}`)
})