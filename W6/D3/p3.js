//Reading and writing files asynchronously with callbacks
const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "async-note.txt")
//To write to a file //need not to mention as async by default it is async
fs.writeFile(
    filePath, "This is written asynchronously using writeField().",
    function (writeError) {
        if (writeError) {
            console.log("write error: ", writeError.message)
            return;
        }
        console.log("file written synchronously.")
    }
)

fs.readFile(filePath, "utf-8",
    function (readError, content) {
        if (readError) {
            console.log("Read error: ", readError.message)
            return;
        }
        console.log(content)

    }

)

console.log("script continues while file operations are in progress.")