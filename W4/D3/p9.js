const asyncFetchBtn=document.getElementById("asyncFetchBtn");
const output=document.getElementById("output");
const postIdInput=document.getElementById("postIdInput");

asyncFetchBtn.addEventListener("click",
    async function(){

    const id=postIdInput.value.trim();
        if(id===""){
            output.textContent="Post Id is required";
            output.style.color="red";
            return;
        }
        const numericId=Number(id);
        if(numericId<1 || numericId>100){
            output.textContent="Please enter valid post ID ranging 1 to 100";
            output.style.color="red"
            return;
        }
        
    try{
        
        output.textContent="Loading User.....";
        const response= await 
        fetch("https://jsonplaceholder.typicode.com/posts/"+numericId)
        if(!response.ok)throw new Error("HTTP error: "+response.status);
        const data=await response.json();
        output.textContent=JSON.stringify(data,null,2);
        output.style.color="green"
    
    }
    catch(error){
        output.textContent="Error: "+error.message;
    }
});