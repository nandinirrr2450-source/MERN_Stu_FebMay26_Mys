//Generated and verified OTP 
const crypto=require('crypto')

const otpstore={}

function generateOTP(userId){
    const otp= crypto.randomInt(100000,999999).toString()
    otpstore[userId]={
        otp,
        expiresAt:Date.now()+1000,
        attempts: 0
    }
    console.log("OTP: ",otp)
}
function verifyOTP(userId,enteredOtp){
    const record=otpstore[userId]

    if(!record){
        return "No OTP"
    }
    if(Date.now()>record.expiresAt) return "Expired"
    if(record.attempts>=3) return "Blocked "

    record.attempts++
    return record.otp===String(enteredOtp)?"valid":"Invalid"
}
generateOTP("user1")
const userEnteredOtp=otpstore["user1"].otp
//const userEnteredOtp="234456" //to check invalid otp
setTimeout(()=>{
    //to check expiry state
    //console.log(verifyOTP("user1",userEnteredOtp))

},10000)
console.log(verifyOTP("user1",userEnteredOtp))