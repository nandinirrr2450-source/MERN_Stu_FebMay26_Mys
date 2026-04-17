//TTL: Time to live
const mongoose = require("mongoose")
async function main() {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/dateDB")
        console.log("Connected to MongoDB")

        const otpSchema = new mongoose.Schema({
            code: String,
            createdAt: {
                type: Date,
                default: Date.now,
                expires: 30 //60 =>seconds
            }
        })

        const OTP = mongoose.model('OTP', otpSchema)
        await OTP.deleteMany()

        await OTP.create({ code: "999999" })
        console.log("OTP created")
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