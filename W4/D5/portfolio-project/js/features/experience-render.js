function renderExperience() {
    const container = document.getElementById("experience-container");

    if (!container) {
        console.log("Experience container not found");
        return;
    }

    container.innerHTML = "";

    experienceData.forEach(exp => {

        const card = document.createElement("div");
        card.className = "group shadow rounded-3xl p-8 hover:shadow-2xl transition-all relative overflow-hidden";

        const hoverBg = document.createElement("div");
        hoverBg.className = "absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-100 transition-opacity";

        const content = document.createElement("div");
        content.className = "relative z-10 flex flex-col lg:flex-row lg:items-center gap-6";

        const left = document.createElement("div");
        left.className = "flex items-center gap-4";

        const circle = document.createElement("div");
        circle.className = "w-16 h-16 bg-emerald-400 rounded flex items-center justify-center shadow-2xl";

        const short = document.createElement("span");
        short.className = "text-white font-bold";
        short.textContent = exp.short;

        circle.appendChild(short);

        const textDiv = document.createElement("div");

        const title = document.createElement("div");
        title.className = "font-semibold text-2xl";
        title.textContent = exp.title;

        const institute = document.createElement("p");
        institute.className = "text-md font-semibold";
        institute.textContent = exp.institute;

        const score = document.createElement("p");
        score.className = "text-md font-semibold";
        score.textContent = exp.score;

        textDiv.appendChild(title);
        textDiv.appendChild(institute);
        textDiv.appendChild(score);

        left.appendChild(circle);
        left.appendChild(textDiv);

        content.appendChild(left);

        card.appendChild(hoverBg);
        card.appendChild(content);

        container.appendChild(card);
    });
}