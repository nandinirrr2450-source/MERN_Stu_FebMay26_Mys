function updateGreeting() {
    const greetingEl = document.getElementById("greeting-text");
    if (!greetingEl) return;

    const hour = new Date().getHours(); // 0 - 23
    let greeting = "";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    greetingEl.textContent = greeting;
}

// Call it on page load
document.addEventListener("DOMContentLoaded", updateGreeting);