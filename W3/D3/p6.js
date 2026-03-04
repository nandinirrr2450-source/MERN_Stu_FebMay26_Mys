//Nested objects and method
const student={
    firstname:"Rohit",
    lastname:"Raj M",
    scores:{
        math: 85,
        science: 92,

    },hobbies:["badminton","roaming"],
    fullname:function(){
        return this.firstname+" "+this.lastname;
    },
    greet(){
        console.log("hi, ",this.fullname());

    }
    


};

// console.log(student)
// console.log(student.scores.math)
// console.log(student.hobbies)
// console.log(student.hobbies[0])
student.greet()

//a function stored inside an object termed as object
