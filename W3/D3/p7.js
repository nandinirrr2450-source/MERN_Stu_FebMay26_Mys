//object iteration
const book={
    title:"Js for newbies",
    author: "___",
    year: 2026
};

for(let key in book){
    console.log(key,":",book[key]);
}
console.log("keys",Object.keys(book));
console.log("Values",Object.values(book));
console.log("Entries",Object.entries(book));