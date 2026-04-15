//Relationship patterns
const mongoose=require('mongoose')

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel")
        console.log("Connected to MongoDB")

        //one-to-many(embedding approach)
        const blogsSchema=new mongoose.Schema({
            title:String,
            comments:[
                {
                    text:String
                }
            ]
        })
        //model get created based on blogsShema structure
        const Blog=mongoose.model('Blog',blogsSchema)
        await Blog.deleteMany()

        const blog=await Blog.create({
            title:"Mongoose Basics",
            comments:[
                {text:"Great article"},
                {text:"Helpful article"}
            ]
        })

        //console.log("Embedding: ")
        //console.log(await Blog.find())

        //One-to-many relationship(referencing approach)
        const postSchema=new mongoose.Schema({
            title:String
        })
        //One-to-many relationship(referencing approach)
        const commentSchema=new mongoose.Schema({
            text:String,
            post:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Post'
            }
        })
        const Post=mongoose.model('Post',postSchema)
        const Comment=mongoose.model('Comment',commentSchema)

        await Post.deleteMany()
        await Comment.deleteMany()

        const post=await Post.create({title:"NodeJS Basics"})
        await Comment.create([
            {text:"Nice post!",post:post._id},
            {text:"Good",post:post._id}
        ])

        //console.log("Refrencing approach: ")
        //console.log(await Comment.find().populate('post'))

        //Many-to-Many
        const studentSchema=new mongoose.Schema({
            name: String,
            courses:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Course'
                }
            ]
        })

        const courseSchema=new mongoose.Schema({
            name:String,
            students:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:'Student'
                }
            ]
        })

        const Student=mongoose.model('Student',studentSchema)
        const Course=mongoose.model('Course',courseSchema)

        const course1=await Course.create({title:"MongoDB"})
        const course2=await Course.create({title:"NodeJS"})

        const Student1=await Student.create({
            name:"Nandini",
            courses:[course1._id,course2._id]
        })

        const Student2=await Student.create({
            name:"Sushmitha",
            courses:[course2._id]
        })

        course1.students.push(Student1._id,Student2._id)
        course2.students.push(Student2._id)
        await course1.save()
        await course2.save()

        console.log("Many-to-Many: ")
        console.log(await Student.find().populate('courses'))
        console.log(await Course.find().populate('students'))

    }
    catch(error){
        console.error("Error: ",error.message)
    }
    finally{
    
            await mongoose.disconnect()
            console.log("connection disconnected")
        }
}
main()