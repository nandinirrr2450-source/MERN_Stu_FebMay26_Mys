//Basics of objects 
const person={name:'Nandini',age:22,place:'Mysore',isstudent:false};
console.log("name",person.name);//dot notation
console.log("person",person);
console.log("age",person['age']);//bracket notation

//to add a new property
person.city="Mysore";
console.log("person=",person);

//to modify
person.age=18
console.log("person=",person);

//delete
delete person.isstudent;
console.log("person=",person);

//object constructor
const car=new Object();
car.make="Audi";
car.model="A4";
car.year=2026;
console.log("Car=",car);
