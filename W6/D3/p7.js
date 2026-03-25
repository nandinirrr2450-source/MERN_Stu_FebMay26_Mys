//Introduction to buffers in NodeJS
//A buffer stores raw bytes

//we create buffer directly from a string
const textBuffer=Buffer.from("Nandini")

//The value in the buffer is the encoded form of the text
console.log("buffer object: ",textBuffer)
console.log("Buffer length in bytes: ",textBuffer.length)
console.log("byte at index 0: ",textBuffer[0])
console.log("byte at index 0: ",textBuffer[1])
console.log("byte at index 0: ",textBuffer[2])
console.log("byte at index 0: ",textBuffer[3])

//Each character stored internally as byte data
//for standard ASCII letters there will be equivalent code
//Buffer stores numeric value between 0 to 255
