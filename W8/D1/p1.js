//conecting to Mongodb to Nodejs using Mongoose and defining schema and models
const mongoose=require("mongoose")

async function main(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern")
        console.log("MongoDB connected successfully")

        const userSchema=new mongoose.Schema({
            name:String,
            age:Number,
            role:String
        })
        const user=mongoose.model("User",userSchema)
        console.log("mongoose schema & model created successfully")
        console.log("Model name: ",user.modelName)

        await mongoose.connection.close()
        console.log("connection closed")
    }
    catch(error){
        console.log("failed to connect to DB",error.message)
    }
}

main()