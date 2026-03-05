//Arrays basics
console.log("Array basics")
//creating Arrays
let emptyArray=[];
let numArray=[1,2,3,4];
let mixedArray=[42,"hello",true,null,{name:"Gola"},[5,6]]
console.log(emptyArray)
console.log(numArray)
console.log(mixedArray)

//creation of array using constructor
let fruits=new Array("Orange","Mango","WoodApple");
console.log(fruits);
console.log("Is fruits an Array? ",Array.isArray(fruits))
//PUSH 
fruits.push("Papaya");
console.log(fruits);
//POP to remove
fruits.pop();
console.log(fruits);
//unshift adds at beginning
fruits.unshift("Watermelon")
console.log(fruits);
//shift removes from beginning
fruits.shift()
console.log(fruits);