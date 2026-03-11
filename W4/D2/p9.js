const form = document.getElementById("feedbackForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const typeInput = document.getElementById("type");
const feedbackInput = document.getElementById("feedback");

const container = document.getElementById("feedbackContainer");
const message = document.getElementById("message");
const countDisplay = document.getElementById("count");

let feedbackCount = 0;

form.addEventListener("submit", function (event) {

    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const type = typeInput.value;
    const feedback = feedbackInput.value.trim();

    //email validation
    if(!email.includes('@') || !email.includes('.')){
        message.textContent = "Invalid email";
        message.style.color="red"
        return;

    }

    // validation of all entered
    if (!name || !email || !type || !feedback) {
        message.textContent = "All fields are required";
        message.style.color = "red";
        return;
    }


    if (feedback.length < 20) {
        message.textContent = "Feedback must be at least 20 characters";
        return;
    }

    message.textContent = "";

    // delete button
    const deleteBtn = card.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", function () {
        card.remove();
        feedbackCount--;
        countDisplay.textContent = feedbackCount;
    });


});