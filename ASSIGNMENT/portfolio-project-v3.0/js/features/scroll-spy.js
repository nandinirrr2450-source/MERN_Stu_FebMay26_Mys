const sections = document.querySelectorAll("#projects, #experience, #skills");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 150) {
            current = sec.id;
        }
    });

    // Bottom page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = "skills";
    }

    navLinks.forEach(link => {
        link.classList.toggle(
            "text-blue-600",
            link.getAttribute("href") === "#" + current
        );
    });
});