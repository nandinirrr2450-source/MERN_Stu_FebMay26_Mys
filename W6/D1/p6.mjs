//Import Es modules

import createInvoiceLabel,{calculateTotal,taxrate} from "./p5.mjs"

const subTotal=4000;
const total= calculateTotal(subTotal)
const label=createInvoiceLabel("INV-2026-001")

console.log("Invoice Label: ",label)
console.log("Tax rate: ",taxrate)
console.log("Final Total: ",total)