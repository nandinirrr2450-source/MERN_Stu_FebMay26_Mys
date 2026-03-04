//json stringify and parse
const employee={
    id:101,
    name:"Nandini",
    dept:"ECE",
    isActive:true
};
//JSON stringify
const jsonstring=JSON.stringify(employee)
console.log(jsonstring)
console.log(employee)

//JSON parsing
const parsedobject=JSON.parse(jsonstring)
console.log(parsedobject)
console.log(jsonstring)