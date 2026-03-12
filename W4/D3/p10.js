const asyncFetchBtn=document.getElementById("asyncFetchBtn");
const output=document.getElementById("output");

asyncFetchBtn.addEventListener("click",
    async function(){
        try{
            const response = await
            fetch("https://jsonplaceholder.typicode.com/users")
            if(!response.ok) throw new Error("HTTP error: "+response.status);
            const users=await response.json();
            // output.textContent=JSON.stringify(users,null,2)
            console.log(users)

            const firstthree=users.splice(0,3);
            output.textContent=JSON.stringify(firstthree,null,2)

        }
        catch(error){
            output.textContent="Error :"+error.message;
        }

    })