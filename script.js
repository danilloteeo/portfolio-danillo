function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

const aboutInfo = {
    name: "Danillo Teodoro",
    age: 17,
    job: "Atendente ao sistema na Lampa Software",
    description: "Olá, eu sou Danillo Teodoro, tenho 17 anos e atualmente trabalho na empresa Lampa Software, onde comecei com meus 15 anos. Nela eu comecei como atendente ao sistema que temos aqui, que é para o controle rural. Comecei apenas mexendo editando algumas tabelas no banco de dados do sistema, mas acabei pegando gosto sobre como tudo aquilo funcionava, então decidi começar a me aprofundar mais ainda. Estou estudando Java na DIO, com um Bootcamp do Santander."
};

function displayAbout() {
    const aboutContent = document.getElementById('about-content');
    aboutContent.innerHTML = `
        <p>${aboutInfo.description}</p>
    `;
}

let projects = [
    { title: "Edição de Tabelas", description: "Crianção de um App em Python para automação da edição de tabelas do cliente." },
    { title: "Estudos Java", description: "Bootcamp Santander na DIO para aprendizado de Java e seus frameworks, como springboot e laravel" }
];

function displayProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-item';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectDiv);
    });
}

function addProject() {
    const title = prompt('Digite o título do projeto:');
    const description = prompt('Digite a descrição do projeto:');
    
    if (title && description) {
        projects.push({ title, description });
        displayProjects();
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
    displayProjects();
};