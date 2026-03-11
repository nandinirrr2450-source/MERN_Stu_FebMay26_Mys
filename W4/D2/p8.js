const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const addBtn = document.getElementById("addFaq");
const removeBtn = document.getElementById("removeFaq");
const container = document.getElementById("faqContainer");
const message = document.getElementById("message");

// ADD FAQ
addBtn.addEventListener("click", function () {

    let question = questionInput.value.trim();
    let answer = answerInput.value.trim();

    if (question.length < 5) {
        message.textContent = "Question must be at least 5 characters";
        message.style.color = "red";
        return;
    }

    if (answer.length < 15) {
        message.textContent = "Answer must be at least 15 characters";
        message.style.color = "red";
        return;
    }

    message.textContent = "";

    const faqBlock = document.createElement("div");

    const heading = document.createElement("h3");
    heading.textContent = question;

    const para = document.createElement("p");
    para.textContent = answer;

    // badge
    const badge = document.createElement("span");
    badge.textContent = " FAQ ";

    faqBlock.appendChild(heading);
    faqBlock.appendChild(badge);
    faqBlock.appendChild(para);

    container.appendChild(faqBlock);

    questionInput.value = "";
    answerInput.value = "";
});


// REMOVE FAQ
removeBtn.addEventListener("click", function () {

    if (container.children.length > 0) {
        container.removeChild(container.lastElementChild);
        message.textContent = "";
    } 
    else {
        message.textContent = "No FAQs available";
        message.style.color = "red";
    }

});