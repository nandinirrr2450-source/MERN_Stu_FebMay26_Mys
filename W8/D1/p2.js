//CRUD operation in MongoDB using Mongoose
const mongoose = require("mongoose")

async function runCrudDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/abcmern")
        console.log("MongoDB connected successfully")

        const studentSchema = new mongoose.Schema({
            name: String,
            age: Number,
            role: String
        })
        const Student = mongoose.models.Student || mongoose.model("Student", studentSchema)
        //used to delete previous demo data
        await Student.deleteMany({role:"demo-student"})

        //Create using save() ,in 1st approach
        const firstStudent=new Student({
            name: "Nandini",
            age: 22,
            role: "demo-student"
        })
        await firstStudent.save()
        console.log("created new student with save()",firstStudent)

        //Create using create(),in second approach
        const secondStudent=await Student.create({
            name: "Raj",
            age: 23,
            role: "demo-student"
        })
        console.log("created new student with create()",secondStudent)

        //Read using the function  find()
        const allDemoStudents=await Student.find({role:"demo-student"})
        console.log("Read with find()",allDemoStudents)

        //Read using findOne()
        const oneDemoStudent=await Student.findOne({role:"demo-student"})
        console.log("Read with findOne()",oneDemoStudent)

        //Update using findByIdAndUpdate
        const updateStudent=await Student.findByIdAndUpdate(
            secondStudent._id,
            {age:18},
            {new:true}
        )
        console.log("updated with findByIdAndUpdate()",updateStudent)

        //delete using findByIdAndDelete
        const deletedStudent=await Student.findByIdAndDelete(firstStudent._id)
        console.log("deleted with findByIdAndDelete()",deletedStudent)

        await mongoose.connection.close()
        console.log("connection closed")
    }

    catch (error) {

        console.log("CRUD demo error:",error.message)
    }

}
runCrudDemo()