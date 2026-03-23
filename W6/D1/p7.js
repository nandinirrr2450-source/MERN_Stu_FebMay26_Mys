//understanding path module and json module

const path=require("path");
//JSON is loaded as a normal JS object
const appConfig=require("./support/app-config.json")


console.log("__dirname",__dirname)
console.log("__filename",__filename)

console.log("Application Name: ",appConfig.appName)
console.log("Application Name: ",appConfig.environment)
console.log("Application Name: ",appConfig.features.join(", "))//.join==> make appear like elements rather than array of elements