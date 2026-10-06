const projects = [
    {
        name: "Магазин Formula",
        type: "Веб-сайт",
        video: "formula.mp4",
        toolTags: ["Yii2", "PHP", "JS", "HTML", "CSS"],
        desc: "Веб-сайт інтернет-магазину з каталогом товарів, зручним переглядом продукції та адміністративною панеллю для керування вмістом сайту. Реалізовано клієнтську та серверну частини із використанням Yii2 та PHP."
    },
    {
        name: "Skorpy",
        type: "Веб-сайт",
        video: "skorpy.mp4",
        toolTags: ["Yii2", "PHP", "JS", "HTML", "CSS"],
        desc: "Сайт-портфоліо та презентаційний лендінг архітектурного бюро. Основний акцент зроблено на представленні проєктів, візуальному оформленні та зручній структурі інформації."
    },
    {
        name: "BlackJack",
        type: "Веб-гра",
        video: "blackjack.mp4",
        toolTags: ["React/Vite", "JS", "HTML", "CSS"],
        desc: "Інтерактивна веб-гра в блекджек, створена для демонстрації логіки ігрового процесу та роботи з динамічним інтерфейсом. Проєкт не передбачає азартних ставок або використання реальних грошей."
    },
    {
        name: "Sudoku",
        type: "Веб-гра",
        video: "sudoku.mp4",
        toolTags: ["React/Vite", "JS", "HTML", "CSS"],
        desc: "Інтерактивна веб-гра судоку з трьома рівнями складності. Гравець може обрати відповідний рівень, заповнювати клітинки та перевіряти правильність розв'язання головоломки."
    }
];

const projectsBlock = document.querySelector(".projects-block");

projects.forEach(project => {

    const card = document.createElement("div");
    card.classList.add("project-card");

    card.innerHTML = `
        <div class="project-video">
            <video preload="metadata">
                <source src="video/${project.video}" type="video/mp4">
            </video>
            <div class="play-button"></div>
        </div>

        <div class="project-info">
            <div class="project-type">${project.type}</div>

            <div class="project-title">${project.name}</div>

            <div class="project-tools">
                ${project.toolTags.map(tag => `
                    <span class="tool-tag">${tag}</span>
                `).join("")}
            </div>

            <div class="project-desc">
                ${project.desc}
            </div>
        </div>
    `;

    projectsBlock.appendChild(card);
});
