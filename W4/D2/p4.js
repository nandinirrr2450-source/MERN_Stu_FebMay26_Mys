const studentForm=document.getElementById("studentForm");
const nameInput=document.getElementById("nameInput");
const emailInput=document.getElementById("emailInput");
const inspectBtn=document.getElementById("inspectBtn");
const terms=document.getElementById("terms");
const Country=document.getElementById("Country");


inspectBtn.addEventListener("click",function(){
    console.log("Form: ",studentForm);

    console.log("Form: ",nameInput);
    console.log("Form: ",nameInput.value);
    console.log("Form: ",emailInput.value);

    const selectedGender=document.querySelector('input[name="gender"]:checked');
    console.log("Gender details: ",selectedGender?selectedGender.value:"Not selected");
    console.log("Accepeted terms: ",terms.checked);
    console.log("Country: ",Country.value);
});
