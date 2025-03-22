function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

const aboutInfo = {
    name: "Danillo Teodoro",
    age: 17,
    job: "Atendente ao sistema na Lampa Software",
    description: "Olá, eu sou Danillo Teodoro, tenho 17 anos e atualmente trabalho na empresa Lampa Software. Nela eu comecei como atendente ao sistema que temos aqui, que é para o controle rural. Comecei apenas mexendo editando algumas tabelas no banco de dados do sistema, mas acabei pegando gosto sobre como tudo aquilo funcionava, então decidi começar a me aprofundar mais ainda. Estou estudando Java na DIO, com um Bootcamp do Santander."
};

function displayAbout() {
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = `<p>${aboutInfo.description}</p>`;
}

const skills = [
    { name: "Java", icon: "fab fa-java" },
    { name: "HTML", icon: "fab fa-html5" },
    { name: "CSS", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Banco de Dados", icon: "fas fa-database" }
];

function displaySkills() {
    const skillsList = document.getElementById('skills-list');
    skillsList.innerHTML = skills.map(skill => `
        <div class="skill-item">
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        </div>
    `).join('');
}

const experiences = [
    {
        title: "Atendente ao Sistema",
        company: "Lampa Software",
        period: "2023 - Presente",
        description: "Atuo no suporte ao sistema de controle rural, editando tabelas no banco de dados e aprendendo sobre desenvolvimento de software."
    },
    {
        title: "Estudante de Java",
        company: "DIO (Bootcamp Santander)",
        period: "2025 - Presente",
        description: "Estudando Java e desenvolvendo projetos práticos para aprimorar minhas habilidades de programação."
    }
];

function displayExperience() {
    const experienceList = document.getElementById('experience-list');
    experienceList.innerHTML = experiences.map(exp => `
        <div class="experience-item">
            <i class="fas fa-briefcase"></i>
            <div>
                <h3>${exp.title} - ${exp.company}</h3>
                <p><em>${exp.period}</em></p>
                <p>${exp.description}</p>
            </div>
        </div>
    `).join('');
}

let projects = JSON.parse(localStorage.getItem('projects')) || [
    { title: "Edição de Tabelas", description: "Edição de tabelas no banco de dados do sistema de controle rural da Lampa Software", category: "database" },
    { title: "Estudos Java", description: "Bootcamp Santander na DIO para aprendizado de Java", category: "web" }
];

function displayProjects(filteredProjects = projects) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = filteredProjects.map(project => `
        <div class="project-item" data-category="${project.category}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <small>Categoria: ${project.category === 'web' ? 'Web' : 'Banco de Dados'}</small>
        </div>
    `).join('');
}

function filterProjects(category) {
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayProjects();
    } else {
        const filtered = projects.filter(project => project.category === category);
        displayProjects(filtered);
    }
}

function addProject() {
    const title = prompt('Digite o título do projeto:');
    const description = prompt('Digite a descrição do projeto:');
    const category = prompt('Digite a categoria (web ou database):').toLowerCase();

    if (title && description && (category === 'web' || category === 'database')) {
        projects.push({ title, description, category });
        localStorage.setItem('projects', JSON.stringify(projects));
        displayProjects();
    } else {
        alert('Por favor, preencha todos os campos corretamente. Categoria deve ser "web" ou "database".');
    }
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

window.onload = function() {
    showSection('sobre');
    displayAbout();
    displaySkills();
    displayExperience();
    displayProjects();
    document.querySelector('.filter-buttons button:first-child').classList.add('active');
};