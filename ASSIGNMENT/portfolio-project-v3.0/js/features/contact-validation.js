function initContactValidation() {
    const contactForm = document.getElementById("contact-form");
    const contactName = document.getElementById("contact-name");
    const contactEmail = document.getElementById("contact-email");
    const formMessage = document.getElementById("form-message");

    if (!contactForm || !contactName || !contactEmail || !formMessage) {
        console.log("Contact form elements not found");
        return;
    }

    const contactFormDataKey = "contactFormData";

    //  Restore saved data on page load 
    const savedData = JSON.parse(localStorage.getItem(contactFormDataKey) || "{}");
    if (savedData.name) contactName.value = savedData.name;
    if (savedData.email) contactEmail.value = savedData.email;

    //Auto-save on input 
    contactName.addEventListener("input", () => {
        formMessage.textContent = "";
        const currentData = JSON.parse(localStorage.getItem(contactFormDataKey) || "{}");
        currentData.name = contactName.value;
        localStorage.setItem(contactFormDataKey, JSON.stringify(currentData));
    });

    contactEmail.addEventListener("input", () => {
        formMessage.textContent = "";
        const currentData = JSON.parse(localStorage.getItem(contactFormDataKey) || "{}");
        currentData.email = contactEmail.value;
        localStorage.setItem(contactFormDataKey, JSON.stringify(currentData));
    });

    // Form validation and submission 
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = contactName.value.trim();
        const email = contactEmail.value.trim();

        formMessage.textContent = "";
        formMessage.className = "text-sm";

        // Name validation
        if (name === "") {
            formMessage.textContent = "Name is required";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;
        }
        if (name.length < 5) {
            formMessage.textContent = "Name must be at least 5 characters";
            formMessage.classList.add("text-red-500");
            contactName.focus();
            return;
        }

        // Email validation
        if (email === "") {
            formMessage.textContent = "Email is required";
            formMessage.classList.add("text-red-500");
            contactEmail.focus();
            return;
        }
        const emailPattern = /^[^\s@ ]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Enter valid email";
            formMessage.classList.add("text-red-500");
            contactEmail.focus();
            return;
        }

        formMessage.textContent = "Message submitted successfully";
        formMessage.classList.add("text-green-600");
        console.log("Valid credentials:", { name, email });

        // Clear saved data after submit
        localStorage.removeItem(contactFormDataKey);
        contactForm.reset();
    });
}