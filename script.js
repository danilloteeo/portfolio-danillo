function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const nav = document.getElementById('nav-menu');
    if (window.innerWidth <= 768) {
        nav.classList.remove('active');
    }
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.innerHTML = `<i class="fas ${isDark ? 'fa-sun' : 'fa-moon'}"></i>`;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        console.log('Menu toggle clicked');
        navMenu.classList.toggle('active');
    });
} else {
    console.error('Menu toggle ou nav-menu não encontrados no DOM');
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

// Habilidades
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
    },
    {
        title: "Curso de Spring Boot e Angular",
        company: "Deal",
        period: "2025 - Presente",
        description: "Participando de um curso intensivo de Spring Boot e Angular, desenvolvendo aplicações web modernas e aprendendo sobre arquitetura de software."
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

const certificates = [
    {
        title: "Bootcamp Java - Santander",
        issuer: "DIO",
        year: "2025",
        link: "https://hermes.dio.me/certificates/SU9LNSGI.pdf"
    }
];

function displayCertificates() {
    const certificatesList = document.getElementById('certificates-list');
    certificatesList.innerHTML = certificates.map(cert => `
        <div class="certificate-item">
            <i class="fas fa-certificate"></i>
            <div>
                <h3>${cert.title}</h3>
                <p>Emitido por: ${cert.issuer} - ${cert.year}</p>
                <a href="${cert.link}" target="_blank">Ver Certificado</a>
            </div>
        </div>
    `).join('');
}

let projects = JSON.parse(localStorage.getItem('projects')) || [
    { 
        title: "Edição de Tabelas", 
        description: "Edição de tabelas no banco de dados do sistema de controle rural da Lampa Software", 
        category: "database", 
        image: "F:\Portifolio-danillo\imagens\app.png" 
    },
    { 
        title: "Estudos Java", 
        description: "Bootcamp Santander na DIO para aprendizado de Java", 
        category: "web", 
    }
];

function displayProjects(filteredProjects = projects) {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = filteredProjects.map(project => `
        <div class="project-item" data-category="${project.category}">
            ${project.image ? `<img src="${project.image}" alt="${project.title}">` : ''}
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

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
});

const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.onload = function() {
    showSection('sobre');
    displayAbout();
    displaySkills();
    displayExperience();
    displayCertificates();
    displayProjects();
};