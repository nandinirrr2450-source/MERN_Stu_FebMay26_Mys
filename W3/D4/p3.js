//array map
let numbers=[1,2,3,4,5]
let squared=numbers.map(num=>num*num)
console.log(squared)

let prices=[100,200,300,400]
let pricewithGST= prices.map(price=>price+price*0.18)
console.log("price without tax",prices)
console.log("price with tax",pricewithGST)

//using map how to extract the files in an object
let users = [
    {name:"Arjun",age:24},
    {name:"krishna",age:28}
]

let names=users.map(monkey => monkey.name) //i could make use of user in place of monkey because it is user defined
console.log(" ",names)