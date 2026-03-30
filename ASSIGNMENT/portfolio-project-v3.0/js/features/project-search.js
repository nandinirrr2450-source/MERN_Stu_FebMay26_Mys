function initProjectSearch() {
    const searchInput = document.getElementById("project-search");

    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        renderproject(searchInput.value);
    });
}