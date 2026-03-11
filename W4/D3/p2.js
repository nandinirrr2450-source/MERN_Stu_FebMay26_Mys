const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    localStorage.setItem("theme",themeInput.value);
    localStorage.setItem("Username","Nandini");
    localStorage.setItem("loggedIn","true");
    console.log("saved theme",themeInput.value);
    output.textContent="saved to localStorage successful";
    output.style.color="green";
})

document.getElementById("readBtn").addEventListener("click",function(){
    const theme=(localStorage.getItem("theme"));
    output.textContent=  "Read from local storage :" +theme;
    output.style.color="green";
})

document.getElementById("removeBtn").addEventListener("click",function(){
    const theme=localStorage.removeItem("Username");
    output.textContent=  "Removed from local storage :";
    output.style.color="blue";
})

document.getElementById("clearBtn").addEventListener("click",function(){
    localStorage.clear();
    output.textContent=  "Cleared local storage ";
    output.style.color="red";
})
