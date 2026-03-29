function renderproject(searchText = "") {
    const projectsContainer = document.getElementById("projects-container");

    if (!projectsContainer) {
        console.log("Projects container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    //finds searching words
    const searchWords = searchText
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(word => word.length > 0);

    projectsData.forEach(function (project) {

        const techText = Array.isArray(project.technologies)
            ? project.technologies.join(" ")
            : project.technologies;

        //highlighting worsd
        function highlight(text) {
            if (!searchWords.length) 
                return text;

            let result = text;

            searchWords.forEach(word => {
                const regex = new RegExp(word, "gi");
                result = result.replace(regex, match => `<mark>${match}</mark>`);
            });

            return result;
        }

        //creation  card
        const card = document.createElement("div");
        card.className = "relative p-8 text-center bg-white rounded-3xl shadow-lg";

        const projectName = document.createElement("h2");
        projectName.className = "text-xl font-bold mb-2";
        projectName.innerHTML = highlight(project.name);

        const projectCategory = document.createElement("h5");
        projectCategory.className = "text-blue-800 mb-2";
        projectCategory.innerHTML = highlight(project.category);

        const projectDescription = document.createElement("p");
        projectDescription.className = "mb-2";
        projectDescription.innerHTML = highlight(project.description);

        const projectTechnologies = document.createElement("span");
        projectTechnologies.className = "text-green-600";
        projectTechnologies.innerHTML = highlight(techText);

        const projectStatus = document.createElement("div");
        projectStatus.className = "absolute top-2 right-2 bg-red-500 text-white text-sm rounded-lg p-1";
        projectStatus.textContent = project.status;

        const projectliveDemo = document.createElement("div");
        projectliveDemo.className = "text-blue-500 text-sm mt-2 px-4 px-4 bg-blue-200 rounded-lg";
        projectliveDemo.textContent = project.liveDemo;

        const projectgithub = document.createElement("div");
        projectgithub.className = "text-blue-500 text-sm mt-2 px-4 px-4 bg-blue-200 rounded-lg";
        projectgithub.textContent = project.github;

        card.appendChild(projectName);
        card.appendChild(projectCategory);
        card.appendChild(projectDescription);
        card.appendChild(projectTechnologies);
        card.appendChild(projectStatus);
        card.appendChild(projectliveDemo);
        card.appendChild(projectgithub);

        projectsContainer.appendChild(card);
    });
}
const searchInput = document.getElementById("project-search");

searchInput.addEventListener("input", function () {
    renderproject(searchInput.value);
});