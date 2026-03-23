//commonJs Export and import
function calculateTax(amount){
    return amount*0.18
}

function applyDiscount(amount,percent){
    return amount-amount*(percent/100)
}

function formatCurrency(amount){
    return "INR "+amount.toFixed(2)//it fixes decimal point to two digit
}
//module.exports makes this function available to require
module.exports={calculateTax,applyDiscount,formatCurrency}