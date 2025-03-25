AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
});

const app = Vue.createApp({
    data() {
        return {
            theme: localStorage.getItem('theme') || 'light',
            isMenuOpen: false
        };
    },
    methods: {
        toggleTheme() {
            this.theme = this.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.theme);
            document.body.setAttribute('data-theme', this.theme);
            AOS.refresh();
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        showSection(sectionId) {
            this.isMenuOpen = false;
            showSection(sectionId);
        },
        handleResize() {
            if (window.innerWidth >= 768) {
                this.isMenuOpen = false;
            }
        }
    },
    mounted() {
        document.body.setAttribute('data-theme', this.theme);
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
});

app.mount('#app');

function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        if (section.classList.contains('active')) section.classList.add('opacity-0');
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
        }
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
        });
        AOS.refresh();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
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
            <div class="skill-item flex items-center space-x-2 sm:space-x-3 lg:space-x-4 p-2 sm:p-3 lg:p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300" data-aos="fade-right">
                <i class="${skill.icon} text-lg sm:text-2xl lg:text-3xl text-gray-900"></i>
                <span class="text-xs sm:text-base lg:text-lg font-medium text-gray-700">${skill.name}</span>
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
            <div class="experience-item flex space-x-2 sm:space-x-3 lg:space-x-4 p-2 sm:p-3 lg:p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300" data-aos="fade-right">
                <i class="fas fa-briefcase text-lg sm:text-2xl lg:text-3xl text-gray-900"></i>
                <div>
                    <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">${exp.title} - ${exp.company}</h3>
                    <p class="text-xs sm:text-sm lg:text-sm text-gray-500 italic">${exp.period}</p>
                    <p class="text-gray-600 text-xs sm:text-sm lg:text-base">${exp.description}</p>
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
            <div class="certificate-item flex space-x-2 sm:space-x-3 lg:space-x-4 p-2 sm:p-3 lg:p-4 bg-gray-50 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300" data-aos="fade-right">
                <i class="fas fa-certificate text-lg sm:text-2xl lg:text-3xl text-gray-900"></i>
                <div>
                    <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">${cert.title}</h3>
                    <p class="text-gray-600 text-xs sm:text-sm lg:text-base">Emitido por: ${cert.issuer} - ${cert.year}</p>
                    <a href="${cert.link}" target="_blank" class="text-gray-900 hover:text-gray-700 underline text-xs sm:text-sm lg:text-base">Ver Certificado</a>
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
        title: "API que retorna valores Y dentro de um parâmetro X",
        description: "API de gerenciamento de mapa",
        category: "database",
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
                <div class="project-item project-card bg-white rounded-lg shadow-lg p-3 sm:p-4 lg:p-6 transition-transform duration-300 hover:shadow-xl" data-category="${project.category}" data-aos="fade-up">
                    ${project.image ? `<img src="${project.image}" alt="${project.title}" loading="lazy" class="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-md mb-2 sm:mb-3 lg:mb-4 hover:scale-105 transition-transform duration-300">` : ''}
                    <h3 class="text-base sm:text-lg lg:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">${project.title}</h3>
                    <p class="text-gray-600 mb-2 sm:mb-3 lg:mb-4 line-clamp-3 text-xs sm:text-sm lg:text-base">${project.description}</p>
                    <small class="text-gray-500 block mb-2 sm:mb-3 lg:mb-4 text-xs sm:text-xs lg:text-sm">Categoria: ${project.category === 'web' ? 'Web' : 'Banco de Dados'}</small>
                    <button onclick="openProjectModal(${index})" class="inline-flex items-center px-2 sm:px-3 lg:px-4 py-1 sm:py-1 lg:py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-transform hover:-translate-y-1 shadow-sm text-xs sm:text-sm lg:text-base">
                        <i class="fas fa-eye mr-1 sm:mr-2 text-xs sm:text-sm lg:text-base"></i> Ver Detalhes
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