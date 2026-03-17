//chaining Promises with return promises
function getOrderId(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(501);//501 is order id
        },500)
    })
}
function getOrderDetails(orderId){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve({
                id:orderId,
                product:"Laptop",
                quantity:2
            })
        },700)
    })
}
getOrderId()
.then(function(orderId){
    console.log("order Id received: ",orderId);
    return getOrderDetails(orderId);
})
.then(function(OrderDetails){
    console.log("order details loaded.")
    console.log("Product: ",OrderDetails.product);
    console.log("Quantity: ",OrderDetails.quantity);

})