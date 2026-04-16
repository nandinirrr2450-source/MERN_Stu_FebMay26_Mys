//Timestamp and advanced queries

const mongoose = require('mongoose')

async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/dateDB")
        console.log("Connected to MongoDB")

        const demoschema = new mongoose.Schema({
            name: String
        },
            {
                timestamps: true
            }
        )

        const Model = mongoose.model('LogTime', demoschema)
        // await Model.deleteMany()

        // const data=await Model.create([
        //     { name: "anusha" },
        //     { name: "abhishek" },
        //     { name: "rahul" }
        // ])
        // console.log("data:",data)

        // const recent=await Model.find({
        //     createdAt:{
        //         //900000 => is in miliseconds
        //         $gte: new Date(Date.now()-900000)
        //     }
        // })
        //console.log("Recent Data:",recent)

        const recentdata=await Model.find().sort({createdAt:-1})
        console.log("Recent Data:",recentdata)

    }
    catch (error) {
        console.error("Error: ", error.message)
    }
    finally {
        await mongoose.disconnect()
        console.log("connection disconnected")
    }
}
main()