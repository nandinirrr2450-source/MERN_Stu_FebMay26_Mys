const translations = {
    en: {
        name: "Nandini R",
        role: "Full-Stack developer | MERN enthusiast | Competitive Programmer",
        downloadResume: "Download Resume"
    },
    kn: {
        name: "ನಂದಿನಿ ಆರ್",
        role: "ಫುಲ್-ಸ್ಟಾಕ್ ಡೆವಲಪರ್ | MERN ಆಸಕ್ತಿ | ಸ್ಪರ್ಧಾತ್ಮಕ ಪ್ರೋಗ್ರಾಮರ್",
        downloadResume: "ರಿಸ್ಯೂಮ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach(function (el) {
        const key = el.getAttribute("data-i18n");

        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    localStorage.setItem("language", lang);
}

window.addEventListener("DOMContentLoaded", function () {
    const savedLang = localStorage.getItem("language") || "en";
    setLanguage(savedLang);
});