//Using the EventEmitter class
const EventEmitter=require("events");//events is an in-built module //imported in-built module events to a const variable EventEmitter

//create a new EventEmitter
//this object can publish events and allow listeners to subscribe
const  orderEmitter=new EventEmitter()
//Register for the event by creating listener for "orderPlaced" event
//whenever the event is emitted, the function will execute
//once()

orderEmitter.once("your order has been placed successfully.",//on is used to listener 
    function(orderId,customerName,billvalue){
        //console.log("hello ",customerName)
        console.log("Bill value:",billvalue)
        console.log("..waiting for restuarant to accept the order.",orderId)
    }
)

orderEmitter.on("your order has been placed successfully.",//on is used to listener 
    function(orderId,customerName){
        console.log("hello ",customerName)
        console.log("Restaurant accepted order.",orderId)
    }
)

orderEmitter.on("your order has been placed successfully.",//on is used to listener 
    function(orderId,customerName){
        console.log(customerName,"we looking for ")
        console.log("Assigning delivery executive.")
    }
)

orderEmitter.on("your order has been placed successfully.",//on is used to listener 
    function(orderId){
        console.log("Vishnu is delivering your order",orderId)
    }
)
//EMit the event with extra data
//The listener receives the OrderId value
orderEmitter.emit("your order has been placed successfully.","ORD-22122003","Nandini",10000)
//[your order has been placed successfully] emmiter consider this as event/name of event 

//using onces now
orderEmitter.emit("your order has been placed successfully.","ORD-22122003","Nandini",10000)