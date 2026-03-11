const introBTn = document.getElementById("introBTn");
const output = document.getElementById("output");

introBTn.addEventListener("click",
    function () {
        output.textContent = "Sending Request......";
        fetch("https://jsonplaceholder.typicode.com/posts/10")
        .then(function(response){
            return response.text();
        })
        .then(function (text) {
                console.log("Text response object:", text)
                output.textContent=text;
            })

        .catch(function(error) {
            output.textContent = "Unexpected fetch error: " + error.message
        });

    });
