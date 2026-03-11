const jsonOutput = document.getElementById("jsonOutput");
document.getElementById("saveBtn").addEventListener("click",
    function () {
        const user = {
            id: 101,
            Name: "Nandini",
            role: "developer",
            skill: ["HTML", "CSS", "JS"]
        };

        localStorage.setItem("userProfile", JSON.stringify(user));//converts json to string
        jsonOutput.textContent = "user object saved as string to local storage";

    }
)

document.getElementById("readBtn").addEventListener("click",
    function () {
        try {
            const user = localStorage.getItem("userProfile");
            console.log(JSON.parse(user));//converts string to json
            jsonOutput.textContent = "user profile: " + user;

        }
        catch(error){
            jsonOutput.textContent = "JSON parsing failed " 

        }
        

    
    }
)