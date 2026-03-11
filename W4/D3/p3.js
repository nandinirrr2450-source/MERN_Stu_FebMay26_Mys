const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",function(){
    sessionStorage.setItem("theme",themeInput.value);
    sessionStorage.setItem('Username','Nandini');
   sessionStorage.setItem("loggedIn","true");
    console.log("saved theme",themeInput.value);
    output.textContent="saved to sessionStorage successful";
    output.style.color="green";
})

document.getElementById("readBtn").addEventListener("click",function(){
    const theme=(sessionStorage.getItem("theme"));
    output.textContent=  "Read from session storage :" +theme;
    output.style.color="green";
})

document.getElementById("removeBtn").addEventListener("click",function(){
    const theme=sessionStorage.removeItem('Username');
    output.textContent=  "Removed from session storage :";
    output.style.color="blue";
})

document.getElementById("clearBtn").addEventListener("click",function(){
    sessionStorage.clear();
    output.textContent=  "Cleared session storage ";
    output.style.color="red";
})
