//Applied filters to the query using comparison operators
const mongoose = require("mongoose")

async function runFilterDemo() {
    try {
        await mongoose.connect("mongodb://localhost:27017/merntraining")
        console.log("MongoDB connected successfully")

        //to create a schema
        const productSchema = new mongoose.Schema({
            name: String,
            price: Number,
            category: String,
            productName: String,
            status: String
        })
        //to create models
        const Product = mongoose.models.Product || mongoose.model("Product", productSchema)
        await Product.deleteMany({});

        const firstProduct = await Product.create(
            [{
            name: "iphone",
            price: 200000,
            category: "Electronics-gadgets",
            productName: "17 Pro-max",
            status: "active"
           },
            {
                name: "Ice-cream",
                price: 150,
                category: "Dairy-products",
                productName: "Vanilla-cup-icecream",
                status: "active"
            },
            {
                name: "Ice-cream",
                price: 200,
                category: "Dairy-products",
                productName: "Chocolate-cup-icecream",
                status: "inactive"
            },
            {
                name: "iphone",
                price: 20000,
                category: "Electronics-gadgets",
                productName: "14",
                status: "inactive"
            }
        ])

            const equalQuery=await Product.find({status:{$eq:"active"}})
            //console.log("Products which are active: ",equalQuery)

            const greaterQuery=await Product.find({price:{$gt:250}})
            //console.log("Products which are greater than 200: ",greaterQuery)

            const lesserQuery=await Product.find({price:{$lt:250}})
            //console.log("Products which are lesser than 200: ",lesserQuery)

            const categoryQuery=await Product.find({category:{$eq:"Electronics-gadgets"}})
            console.log("Products which are lesser than 200: ",categoryQuery)

            await mongoose.connection.close()
            console.log("connection closed")
    }
    catch(error){
        console.log("filter demo error:",error.message)
    }
    
}
runFilterDemo()