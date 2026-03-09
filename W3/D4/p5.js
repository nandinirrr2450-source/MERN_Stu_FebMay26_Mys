//Higher order function: reduce
let nums=[5,10,15,20,25]
let total=nums.reduce((intermediateSum,currentval)=>intermediateSum+currentval,0)
console.log(total)

//to find average
let nums1=[5,10,15,20,25]
let average=nums.reduce((intermediateSum,currentval)=>intermediateSum+currentval,0) /nums.length
console.log(average)

//reduce to object count by category
let items=["pen","pencil","pen","eraser","alsabalpa"]
let count=items.reduce((itemcount,item)=>{
    itemcount[item]=(itemcount[item] || 0)+1
    return itemcount
},{});
console.log("items count: ",count)