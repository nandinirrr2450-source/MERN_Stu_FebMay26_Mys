const livePassword=document.getElementById("livePassword");
const message=document.getElementById("message");

livePassword.addEventListener("input",function(){
    //Password validation
    const password=livePassword.value;
    if(!password){
        message.textContent="Password is required";
        message.style.color="red";
        livePassword.focus();
        return;
    }
    //check length of password
    if(password.length < 8){
        message.textContent="Password must be atleast 8 character long";
        message.style.color="red";
        livePassword.focus();
        return;
    }
    //check UPPERCASE characters
    if(!/[A-Z]/.test(password)){
        message.textContent="Password must have at least one UPPERCASE CHARACTER";
        message.style.color="red";
        livePassword.focus();
        return;
    }

    //Check lowercase characters
    if(!/[a-z]/.test(password)){
        message.textContent="Password must have at least one lowercase character";
        message.style.color="red";
        livePassword.focus();
        return;
    }

    //check number
    if(!/\d/.test(password)){
        message.textContent="Password must have at least single number";
        message.style.color="red";
        livePassword.focus();
        return;
    }

    //check special character
    if(!/[@#$%^&*!]/.test(password)){
        message.textContent="Password must have at least one special character'@#$%^&*!'";
        message.style.color="red";
        livePassword.focus();
        return;

    }
    message.textContent="Valid Email and Password entered";
    message.style.color="green";
    console.log("Success! ",{email,password});
})