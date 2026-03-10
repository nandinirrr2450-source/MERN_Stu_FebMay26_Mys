//innerText and textContent
// innerText: visible rendered text only , allows reading
// textContent: all text nodes regardless of CSS,allows reading
//innerHTML : allows reading or writing HTML markup inside an element

const message=document.getElementById("message");

//this not a good approach
document.getElementById("innerTextBtn").addEventListener("click",function(){
    message.innerText="Updated using innerText";
});

//always recommended
const textContent= document.getElementById("textContentBtn");

textContent.addEventListener("click",function(){
    message.textContent="Updated using textContentBtn";
});

const resetBtn=document.getElementById("resetBtn");

resetBtn.addEventListener("click",function(){
    message.innerText="Original Message";
});

const box=document.getElementById("box");

document.getElementById("innerHTMLBtn").addEventListener("click",function(){
    box.innerHTML="<strong>Original</strong> Content";
});
