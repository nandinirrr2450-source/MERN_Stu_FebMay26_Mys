//OTP generation using Crypto
//crypto is an inbuilt module of Node.js in order to create OTP

const crypto=require('crypto')

function generateOTP(length=6){
    return crypto.randomInt(0,10**length).toString().padStart(length,'0')
}//000044
console.log("OTP: ",generateOTP())