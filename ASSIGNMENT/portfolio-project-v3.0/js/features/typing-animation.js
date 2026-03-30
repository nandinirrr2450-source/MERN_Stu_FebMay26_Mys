function initTypingAnimation() {
    const roles = [
        "Full-Stack Developer",
        "MERN Stack Enthusiast",
        "Competitive Programmer"
    ];

    const typingElement = document.getElementById("typing-text");
    if (!typingElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        typingElement.textContent = currentRole.slice(0, charIndex);

        let speed = 100;

        if (!isDeleting) {
            charIndex++;
            if (charIndex === currentRole.length) {
                speed = 1500;
                isDeleting = true;
            }
        } else {
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 300;
            }
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

window.initTypingAnimation = initTypingAnimation;
setTimeout(() => initTypingAnimation(), 1000);