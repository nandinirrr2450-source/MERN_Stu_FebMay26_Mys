//Basics of embedding and refrencing 
const mongoose=require("mongoose")
async function main(){
    try{
        //embrel=> name of db
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel")
        console.log("Connected to MongoDB")

        const orderSchema=new mongoose.Schema({
            product:String,
            price:Number
        })
        const userSchema=new mongoose.Schema({
            name:String,
            orders:[orderSchema] //embedded document
        })
        //createing a model
        const User=mongoose.model('User',userSchema)
        const embeddedUser=await User.create({
            name:"Nandini",
            orders:[
                {product:"Laptop",price:52000},
                {product:"Iphone",price:120000},
                {product:"Printer",price:70000}
            ]
        })
        // //used to fetch one user data
        // console.log("embedding users are: ",embeddedUser)
        // //used to fetch all user data
        // console.log(await User.find())
        const users=await User.find().lean()
        console.log(JSON.stringify(users,null,2))

        //Refrencing
        const userRefSchema=new mongoose.Schema({
            name:String
        })
        const orderRefSchema=new mongoose.Schema({
            product: String,
            price: Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'UserRef'
            }
        })
        const UserRef=mongoose.model('UserRef',userRefSchema)
        const OrderRef=mongoose.model('OrderRef',orderRefSchema)

        const refUser=await UserRef.create({name:"Rohit"})
        await OrderRef.create({
            product:"Iphone",
            price:50000,
            user:refUser._id
        },
        {
            product:"Laptop",
            price:55000,
            user:refUser._id
        })
        console.log("Refrenced orders:")
        console.log(await OrderRef.find().populate('user'))
    }
    catch(error){
        console.error("Error: ",error.message)
    }
    finally{

        await mongoose.disconnect()
        console.log("connection closed")
    }
}
main()