//Higher order function: filter
let marks=[75,49,56,70,92,51,68,82];
let passed=marks.filter(marks=>marks>=70);
console.log(marks);
console.log(passed);

//using filter how to extract the files in an object
let students = [
    {name:"Nandini",marks:88},
    {name:"rohit",marks:75},
    {name:"Vishnu",marks:45},
    {name:"Punneth",marks:25},
    {name:"Jeevan",marks:82}
]

let pstudents = students.filter(student => student.marks >70).map(student=>student.name)
console.log(" ",pstudents)
