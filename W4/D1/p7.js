//getelement by id
console.log("Document object : ", document);
console.log("Page tittle", document.title);

//const heading=document.getElementById("mainHeading");
//console.log("Heading Text",heading.textContent);

//get element by className
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");

run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";

        const mainFirstHeading = document.querySelector(".mainHeading");
        mainFirstHeading.style.color = "red";

    }
});


//get element by tag name
const spanTag = document.getElementsByTagName("span");
run.addEventListener("click", function () {
    for (let i = 0; i < info.length; i++) {
        info[i].style.color = "blue";
    }

    for (let i = 0; i < spanTag.length; i++) {
        spanTag[i].style.backgroundColor = "lightgreen";
    }
});

//query selector: returns the first element matching a css selector
const mainFirstHeading = document.querySelector(".mainHeading");
//mainFirstHeading.style.color = "red";

//query selector all :returns all the element matching a css selector
const task=document.querySelectorAll(".task");

task.forEach(function(task){
    task.style.color="Purple";

})

