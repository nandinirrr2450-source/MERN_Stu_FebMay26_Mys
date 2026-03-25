//allocating buffers

const { buffer } = require("node:stream/consumers")

//alloc(8)=> allocating 8 bytes of memory
const emptyBuffer=Buffer.alloc(8)
console.log("Contents of emptyBuffer: ",emptyBuffer)
console.log("Allocated buffer bytes: ",[...emptyBuffer])

const textBuffer=Buffer.from([65,66,67])
// const textBuffer=Buffer.from("A")
// console.log("byte at index 0: ",textBuffer[0])

console.log("Buffer from byte array: ",textBuffer)

//Buffer .write() writes text into the buffer
const fuffer=Buffer.alloc(10)
const bytesWritten=fuffer.write("HelloWorld")
console.log("Bytes written: ",bytesWritten)

//Subarrays
const firstSlice= fuffer.subarray(3,6)
console.log("first Slice as bytes",[...firstSlice])

//decode the bytes into text: toString()
console.log("Decoded firstSlice of Buffer: ",firstSlice.toString("utf-8"))