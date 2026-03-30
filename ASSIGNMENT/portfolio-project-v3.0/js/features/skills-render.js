function renderSkills(filterCategory = "All") {
    const skillsContainer = document.getElementById("skills-container");
    if (!skillsContainer) return;

    skillsContainer.innerHTML = ""; // Clear existing

    // Get unique categories
    let categories = [...new Set(skillsData.map(skill => skill.category))];

    if (filterCategory !== "All") {
        categories = categories.filter(cat => cat === filterCategory);
    }

    categories.forEach(category => {
        // Category wrapper
        const categoryWrapper = document.createElement("div");
        categoryWrapper.className = "mb-12 w-full";

        // Category Heading
        const heading = document.createElement("h3");
        heading.className = "text-2xl font-bold mb-6 text-starting";
        heading.textContent = category;

        categoryWrapper.appendChild(heading);

        // Category Grid
        const categoryGrid = document.createElement("div");
        categoryGrid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";

        // Filter skills in this category
        const skillsInCategory = skillsData.filter(skill => skill.category === category);

        skillsInCategory.forEach(skill => {
            const card = document.createElement("div");
            card.className = "bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center";

            const iconBox = document.createElement("div");
            iconBox.className = "w-20 h-20 mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

            const iconText = document.createElement("span");
            iconText.className = "text-2xl text-white font-bold";
            iconText.textContent = skill.shortLabel;

            iconBox.appendChild(iconText);

            const skillName = document.createElement("h4");
            skillName.className = "text-xl font-bold mb-2";
            skillName.textContent = skill.name;

            const skillDescription = document.createElement("p");
            skillDescription.className = "text-sm";
            skillDescription.textContent = skill.description;

            card.appendChild(iconBox);
            card.appendChild(skillName);
            card.appendChild(skillDescription);

            categoryGrid.appendChild(card);
        });

        categoryWrapper.appendChild(categoryGrid);
        skillsContainer.appendChild(categoryWrapper);
    });
}

// Initial render
renderSkills();

// Filter dropdown functionality
const skillsFilter = document.getElementById("skills-filter");
if (skillsFilter) {
    skillsFilter.addEventListener("change", (e) => {
        renderSkills(e.target.value);
    });
}