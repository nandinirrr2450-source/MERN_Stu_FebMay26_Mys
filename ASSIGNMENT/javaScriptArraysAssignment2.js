const form = document.getElementById("feedbackForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dropTypeInput = document.getElementById("dropType");
const feedbackInput = document.getElementById("feedback");
const container = document.getElementById("feedbackContainer");
const message = document.getElementById("message");
const countDisplay = document.getElementById("count");

let feedbackCount = 0;

form.addEventListener("submit", function (event) {

    event.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const dropType = dropTypeInput.value;
    const feedback = feedbackInput.value.trim();

    //email validation
    if (!email.includes('@') || !email.includes('.')) {
        message.textContent = "Invalid email";
        message.style.color = "red"
        return;

    }

    if (feedback.length < 20) {
        message.textContent = "Feedback must be at least 20 characters";
        return;
    }

    // validation of all entered
    if (!name || !email || !dropType || !feedback) {
        message.textContent = "All fields are required";
        message.style.color = "red";
        return;
    }

    message.textContent = "";
    //creation of label
    let label = "";
    if (dropType === "Bug") {
        label = "Needs Review"
    }
    else if (dropType == "Suggestion") {
        label = "Idea"
    }
    else if (dropType === "Appreciation") {
        label = "Positive"
    }

    const card = document.createElement("div");
    card.className = "feedbackCard";

    card.innerHTML = `
        <h3 class="userName"></h3>
        <p class="userEmail"></p>
        <p class="type"></p>
        <p class="text"></p>
        <button class="deleteBtn">Delete</button>
    `;

    card.querySelector(".userName").textContent = name;
    card.querySelector(".userEmail").textContent = email;
    card.querySelector(".type").textContent = dropType + " " + label;
    card.querySelector(".text").textContent = feedback;

    container.appendChild(card);

    feedbackCount++;
    countDisplay.textContent = feedbackCount;

    const deleteBtn = card.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", function () {
        card.remove();
        feedbackCount--;
        countDisplay.textContent = feedbackCount;
    });

    message.textContent = "Feedback added successfully";
    message.style.color = "green";
    
});
