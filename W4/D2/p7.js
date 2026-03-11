const signupForm = document.getElementById("signupForm");
const signupPassword = document.getElementById("signupPassword");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const password = signupPassword.value;
    //to check whether password entered
    if (!password) {
        message.textContent = "Password is required";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //to check length of password
    if (password.length < 8) {
        message.textContent = "Password must be atleast 8 characters long";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //to check UPPER CASE
    if (!/[A-Z]/.test(password)) {
        message.textContent = "Password must have at least one UPPERCASE character";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //to Check lower case
    if (!/[a-z]/.test(password)) {
        message.textContent = "Password must have at least one lowercase character";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //to check digit
    if (!/\d/.test(password)) {
        message.textContent = "Password must have at least one number";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }
    //to check special character
    if (!/[@#$%^&*!]/.test(password)) {
        message.textContent = "Password must have at least one special character @#$%^&*!";
        message.style.color = "red";
        signupPassword.focus();
        return;
    }

    const password1 = confirmPassword.value;

    if (password !== password1) {
        message.textContent = "Please confirm valid password";
        message.style.color = "red";
        confirmPassword.focus();
        return;
    }

    console.log("Password confirming successful");
    message.textContent = "Password confirming successful";
    message.style.color = "green";
});