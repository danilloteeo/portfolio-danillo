AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    
    sections.forEach(section => {
        if (section.classList.contains('active')) {
            section.classList.add('opacity-0');
        }
    });

    setTimeout(() => {
        sections.forEach(section => {
            section.classList.remove('active', 'hidden');
            section.classList.add('hidden', 'opacity-0');
        });

        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            targetSection.classList.add('active', 'opacity-100');
        } else {
            console.error(`Seção com ID ${sectionId} não encontrada.`);
        }

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });

        AOS.refresh();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);

    const nav = document.getElementById('nav-menu');
    if (nav && window.innerWidth <= 768) {
        nav.classList.remove('block');
        nav.classList.add('hidden');
    }
}

const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        console.log('Botão de troca de tema clicado');
        const body = document.body;
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
        themeToggle.innerHTML = `<i class="fas ${newTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>`;
        localStorage.setItem('theme', newTheme);

        AOS.refresh();
    });
} else {
    console.error('Botão theme-toggle não encontrado no DOM');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = `<i class="fas ${savedTheme === 'dark' ? 'fa-sun' : 'fa-moon'}"></i>`;
    }
});

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        console.log('Botão de menu hamburguer clicado');
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('block');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('block')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('block');
            navMenu.classList.add('hidden');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
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
    if (aboutContent) {
        aboutContent.innerHTML = `<p>${aboutInfo.description}</p>`;
    }
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
    if (skillsList) {
        skillsList.innerHTML = skills.map(skill => `
            <div class="skill-item flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300" data-aos="fade-right">
                <i class="${skill.icon} text-2xl sm:text-3xl text-gray-900"></i>
                <span class="text-base sm:text-lg font-medium text-gray-700">${skill.name}</span>
            </div>
        `).join('');
    }
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
    if (experienceList) {
        experienceList.innerHTML = experiences.map(exp => `
            <div class="experience-item flex space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300" data-aos="fade-right">
                <i class="fas fa-briefcase text-2xl sm:text-3xl text-gray-900"></i>
                <div>
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-900">${exp.title} - ${exp.company}</h3>
                    <p class="text-xs sm:text-sm text-gray-500 italic">${exp.period}</p>
                    <p class="text-gray-600 text-sm sm:text-base">${exp.description}</p>
                </div>
            </div>
        `).join('');
    }
}

const certificates = [
    {
        title: "Bootcamp Java - Santander",
        issuer: "DIO",
        year: "2025",
        link: "https://link-do-certificado.com"
    }
];

function displayCertificates() {
    const certificatesList = document.getElementById('certificates-list');
    if (certificatesList) {
        certificatesList.innerHTML = certificates.map(cert => `
            <div class="certificate-item flex space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300" data-aos="fade-right">
                <i class="fas fa-certificate text-2xl sm:text-3xl text-gray-900"></i>
                <div>
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-900">${cert.title}</h3>
                    <p class="text-gray-600 text-sm sm:text-base">Emitido por: ${cert.issuer} - ${cert.year}</p>
                    <a href="${cert.link}" target="_blank" class="text-gray-900 hover:text-gray-700 underline text-sm sm:text-base">Ver Certificado</a>
                </div>
            </div>
        `).join('');
    }
}

let projects = JSON.parse(localStorage.getItem('projects')) || [
    { 
        title: "Edição de Tabelas", 
        description: "Edição de tabelas no banco de dados do sistema de controle rural da Lampa Software", 
        category: "database", 
        image: "https://raw.githubusercontent.com/danilloteo/portfolio-danillo/main/images/edicao-tabelas.png"
    },
    { 
        title: "Estudos Java", 
        description: "Bootcamp Santander na DIO para aprendizado de Java", 
        category: "web", 
        image: "https://via.placeholder.com/300x150" 
    }
];

function displayProjects(filteredProjects = projects) {
    const projectList = document.getElementById('project-list');
    if (projectList) {
        projectList.classList.remove('opacity-100');
        projectList.classList.add('opacity-0');

        setTimeout(() => {
            projectList.innerHTML = filteredProjects.map((project, index) => `
                <div class="project-item project-card bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-transform duration-300 hover:shadow-xl" data-category="${project.category}" data-aos="fade-up">
                    ${project.image ? `<img src="${project.image}" alt="${project.title}" class="w-full h-40 sm:h-48 object-cover rounded-md mb-3 sm:mb-4 hover:scale-105 transition-transform duration-300">` : ''}
                    <h3 class="text-lg sm:text-xl font-semibold text-gray-900 mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">${project.description}</p>
                    <small class="text-gray-500 block mb-3 sm:mb-4 text-xs sm:text-sm">Categoria: ${project.category === 'web' ? 'Web' : 'Banco de Dados'}</small>
                    <button onclick="openProjectModal(${index})" class="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-transform hover:-translate-y-1 shadow-sm text-sm sm:text-base">
                        <i class="fas fa-eye mr-2"></i> Ver Detalhes
                    </button>
                </div>
            `).join('');
            projectList.classList.remove('opacity-0');
            projectList.classList.add('opacity-100');
            AOS.refresh();
        }, 300);
    }
}

function openProjectModal(index) {
    const project = projects[index];
    const modal = document.getElementById('project-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalCategory = document.getElementById('modal-category');

    if (modal && modalImage && modalTitle && modalDescription && modalCategory) {
        modalImage.src = project.image || 'https://via.placeholder.com/300x150';
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modalCategory.textContent = `Categoria: ${project.category === 'web' ? 'Web' : 'Banco de Dados'}`;

        modal.classList.remove('hidden');
    }
}

const closeModalButton = document.getElementById('close-modal');
if (closeModalButton) {
    closeModalButton.addEventListener('click', () => {
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.add('hidden');
        }
    });
}

const projectModal = document.getElementById('project-modal');
if (projectModal) {
    projectModal.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            e.currentTarget.classList.add('hidden');
        }
    });
}

function filterProjects(category) {
    const buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(btn => btn.classList.remove('active', 'bg-gray-900', 'text-white'));
    event.target.classList.add('active', 'bg-gray-900', 'text-white');

    if (category === 'all') {
        displayProjects();
    } else {
        const filtered = projects.filter(project => project.category === category);
        displayProjects(filtered);
    }
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
}

const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.remove('opacity-0');
            backToTop.classList.add('opacity-100');
        } else {
            backToTop.classList.remove('opacity-100');
            backToTop.classList.add('opacity-0');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


window.onload = function() {
    setTimeout(() => {
        const loadingSpinner = document.getElementById('loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.classList.add('hidden');
        }

        showSection('sobre');
        displayAbout();
        displaySkills();
        displayExperience();
        displayCertificates();
        displayProjects();
    }, 1000); 
};