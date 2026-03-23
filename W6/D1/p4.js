//Usage of built-in and third-party modules
//built-in=>any module created by core developer of node.js
//third-party=> any module created by non core developer of node.js and contributed to npm

const path=require("path")//path is inbuilt module //any module that is in-built no need of installation

const invoicePath=path.join("invoices","2026","invoice_001.txt")
console.log("built-in module result:",invoicePath)

//to use Third-party package/module
try{
    const _ = require("lodash")
    console.log("Third-party module example")
}
catch(error){
    console.log("Third-party module 'lodash' is not installed",error.message)
}