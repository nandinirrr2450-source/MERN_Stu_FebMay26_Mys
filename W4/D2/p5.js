const signupForm=document.getElementById("signupForm");
const signupEmail=document.getElementById("signupEmail");
const signupPassword=document.getElementById("signupPassword");
const message=document.getElementById("message");

signupForm.addEventListener("submit",function(event){
    event.preventDefault();
    const email=signupEmail.value.trim();
    if(!email){
        message.textContent="Email is required";
        message.style.color="red";
        signupEmail.focus();
        return;
    }
    if(!email.includes('@') || !email.includes('.')){
        message.textContent="Please enter valid email id";
        message.style.color="red";
        signupEmail.focus();
        return;
    }

    //Password validation
    const password=signupPassword.value;
    //or 
    //console.log(signupForm.nextElementSibling.signupPassword.value); //both works same 
    if(!password){
        message.textContent="Password is required";
        message.style.color="red";
        signupPassword.focus();
        return;
    }
    //check length of password
    if(password.length < 8){
        message.textContent="Password must be atleast 8 character long";
        message.style.color="red";
        signupPassword.focus();
        return;
    }
    //check UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent="Password must have at least one UPPERCASE CHARACTER";
        message.style.color="red";
        signupPassword.focus();
        return;
    }

    //Check lowercase characters
    if(!/[a-z]/.test(password)){
        message.textContent="Password must have at least one lowercase character";
        message.style.color="red";
        signupPassword.focus();
        return;
    }

    //check number
    if(!/\d/.test(password)){
        message.textContent="Password must have at least single number";
        message.style.color="red";
        signupPassword.focus();
        return;
    }

    //check special character
    if(!/[@#$%^&*!]/.test(password)){
        message.textContent="Password must have at least one special character'@#$%^&*!'";
        message.style.color="red";
        signupPassword.focus();
        return;

    }
    message.textContent="Valid Email and Password entered";
    message.style.color="green";
    console.log("Success! ",{email,password:"***Hidden***"});

})
//clear message on input
signupEmail.addEventListener("input",()=>message.textContent="");
signupPassword.addEventListener("input",()=>message.textContent="");