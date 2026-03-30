
// Default category
let selectedCategory = "All";

//Recently Viewed 
const RECENTLY_VIEWED_KEY = "recentlyViewedProjects";

// Save project to recently viewed (max 2)
function saveRecentlyViewed(project) {
    let recent = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || "[]");
    recent = recent.filter(p => p.id !== project.id); // to remove duplicates
    recent.unshift(project);
    if (recent.length > 2) recent = recent.slice(0, 2);
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(recent));
}

// Render Recently Viewed Projects
function renderRecentlyViewed() {
    const section = document.getElementById("recently-viewed-section");
    const container = document.getElementById("recently-viewed-container");
    if (!container || !section) return;

    const recent = JSON.parse(localStorage.getItem(RECENTLY_VIEWED_KEY) || "[]");
    if (recent.length === 0) {
        section.classList.add("hidden");
        container.innerHTML = "";
        return;
    }

    section.classList.remove("hidden");
    container.innerHTML = "";

    recent.forEach(project => {
        const card = document.createElement("div");
        card.className = "p-4 bg-white rounded-lg shadow hover:scale-105 transition cursor-pointer";
        card.innerHTML = `<strong>${project.name}</strong> - ${project.category}`;
        container.appendChild(card);
    });
}

//Update project count
function updateCount(count) {
    const countElement = document.getElementById("project-count");
    if (countElement) countElement.textContent = `${count} projects found`;
}

//Render Projects
function renderproject(searchText = "") {
    const projectsContainer = document.getElementById("projects-container");
    if (!projectsContainer) return;
    projectsContainer.innerHTML = "";

    const searchWords = searchText.toLowerCase().trim().split(/\s+/).filter(w => w);

    // Filter by category and search
    let filteredProjects = projectsData.filter(project => {
        const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
        const techText = Array.isArray(project.technologies) ? project.technologies.join(" ") : project.technologies;
        const text = (project.name + project.category + project.description + techText).toLowerCase();
        const matchesSearch = searchWords.every(word => text.includes(word));
        return matchesCategory && matchesSearch;
    });

    // Sorting
    const sortSelect = document.getElementById("project-sort");
    const sortValue = sortSelect ? sortSelect.value : "default";
    if (sortValue === "az") filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortValue === "za") filteredProjects.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortValue === "status") filteredProjects.sort((a, b) => a.status.localeCompare(b.status));

    function highlight(text) {
        if (!searchWords.length) return text;
        let result = text;
        searchWords.forEach(word => {
            const regex = new RegExp(word, "gi");
            result = result.replace(regex, match => `<mark>${match}</mark>`);
        });
        return result;
    }

    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "relative p-8 pb-16 text-center bg-white rounded-3xl shadow-lg cursor-pointer";

        const projectName = document.createElement("h2");
        projectName.className = "text-xl font-bold mb-2";
        projectName.innerHTML = highlight(project.name);

        const projectCategory = document.createElement("h5");
        projectCategory.className = "text-blue-800 mb-2";
        projectCategory.innerHTML = highlight(project.category);

        const fullText = project.description;
        const shortText = fullText.length > 30 ? fullText.slice(0, 30) + "..." : fullText;
        const projectDescription = document.createElement("p");
        projectDescription.className = "mb-2";
        projectDescription.innerHTML = highlight(shortText);

        const toggleBtn = document.createElement("button");
        toggleBtn.className = "absolute bottom-4 left-1/2 transform -translate-x-1/2 text-blue-600 text-sm font-bold";
        if (fullText.length > 30) toggleBtn.textContent = "View More";
        else toggleBtn.style.display = "none";

        let expanded = false;
        toggleBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            expanded = !expanded;
            projectDescription.innerHTML = expanded ? highlight(fullText) : highlight(shortText);
            toggleBtn.textContent = expanded ? "View Less" : "View More";
        });

        const projectTechnologies = document.createElement("span");
        projectTechnologies.className = "text-green-600";
        projectTechnologies.innerHTML = highlight(Array.isArray(project.technologies) ? project.technologies.join(" ") : project.technologies);

        const projectStatus = document.createElement("div");
        projectStatus.className = "absolute top-2 right-2 bg-red-500 text-white text-sm rounded-lg p-1";
        projectStatus.textContent = project.status;

        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(toggleBtn);

        projectsContainer.appendChild(card);

        // Add click for recently viewed
        card.addEventListener("click", () => {
            saveRecentlyViewed(project);
            renderRecentlyViewed();
        });
    });

    updateCount(filteredProjects.length);
}

// Initialize everything on DOM load
document.addEventListener("DOMContentLoaded", () => {
    renderRecentlyViewed();
    renderproject();

    //Sort dropdown listener 
    const sortSelect = document.getElementById("project-sort");
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            renderproject(document.getElementById("project-search")?.value || "");
        });
    }

    //Search input listener
    const searchInput = document.getElementById("project-search");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            renderproject(searchInput.value);
        });
    }

    // Category buttons 
    const filterContainer = document.getElementById("project-filters");
    if (filterContainer) {
        const categories = ["All", "Frontend", "Backend"];
        filterContainer.innerHTML = "";

        categories.forEach(cat => {
            const btn = document.createElement("button");
            btn.textContent = cat;
            btn.className = "px-4 py-2 rounded bg-gray-200 font-bold hover:bg-blue-400 transition";

            // Active button styling
            if (cat === selectedCategory) btn.classList.add("bg-blue-500", "text-white");

            btn.addEventListener("click", () => {
                selectedCategory = cat;

                // Update active class
                Array.from(filterContainer.children).forEach(b => {
                    b.classList.remove("bg-blue-500", "text-white");
                    b.classList.add("bg-gray-200");
                });
                btn.classList.remove("bg-gray-200");
                btn.classList.add("bg-blue-500", "text-white");

                renderproject(document.getElementById("project-search")?.value || "");
            });

            filterContainer.appendChild(btn);
        });
    }
});