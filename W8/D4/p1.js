//Date Fundamentals
const mongoose=require('mongoose')

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/dateDB")
        console.log("Connected to MongoDB")

        const dateSchema= new mongoose.Schema({
            name:String,
            createdAt:{
                //means if we not give date i/p defaultly current date will be taken
                type:Date,
                default:Date.now()
            }
        })
        const Model=mongoose.model('DateFund',dateSchema)
        await Model.deleteMany()

        const doc=await Model.create({
            name:"Test"
        })
        console.log("Document: ",doc)


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