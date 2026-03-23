//Using a custom commonJS module

const {calculateTax,applyDiscount,formatCurrency}=require("./p2")//name of the file where function are exported
const itemName="laptop";
const basePrice=60000;


const discountedPrice= applyDiscount(basePrice,10)
const taxAmount=calculateTax(discountedPrice);
const finalPrice=discountedPrice + taxAmount

console.log("Item:",itemName)
console.log("Base Price:",formatCurrency(basePrice))
console.log("Discounted Price:",formatCurrency(discountedPrice))
console.log("GST Tax @18%:"+formatCurrency(taxAmount))
console.log("final price to be Paid:",formatCurrency(finalPrice))
