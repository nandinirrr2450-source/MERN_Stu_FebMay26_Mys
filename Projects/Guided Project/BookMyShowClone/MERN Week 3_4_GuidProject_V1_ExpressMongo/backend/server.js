//Load details from the environment variables 
require("dotenv").config()

const app=require("./app")
const connectDB=require("./src/config/db")
//connect db
connectDB()

//PORT configuration
const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})