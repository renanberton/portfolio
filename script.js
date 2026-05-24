// Dados dos projetos
const projects = [
    {
        title: "Pokédex - React",
        description: "Projeto que consome a API Oficial do Pokémon e exibe os mesmos, com opção de pesquisar e listar todos.",
        tags: ["React", "API", "JavaScript", "CSS"],
        icon: "fab fa-react",
        github: "https://github.com/renanberton/pokedex-react",
        demo: "https://pokedex-renan.netlify.app/"
    },
    {
        title: "Calcule Aki",
        description: "Projeto que contém diversas calculadoras para facilitar vários cálculos que fazemos no dia-a-dia.",
        tags: ["JavaScript", "HTML", "CSS", "Math"],
        icon: "fas fa-calculator",
        github: "#",
        demo: "#"
    },
    {
        title: "Bikcraft",
        description: "Site de Exposição de bicicletas, desenvolvido para aperfeiçoar meus conhecimentos em desenvolvimento WEB.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        icon: "fas fa-bicycle",
        github: "#",
        demo: "#"
    },
    {
        title: "Jogo da Memória Pokémon",
        description: "Jogo da memória Pokémon, desenvolvido para aprender a usar Javascript e seus fundamentos.",
        tags: ["JavaScript", "Game", "CSS", "HTML"],
        icon: "fas fa-brain",
        github: "#",
        demo: "#"
    },
    {
        title: "Quiz",
        description: "Jogo de perguntas e respostas, com várias funcionalidades e exibe o total de respostas corretas no final.",
        tags: ["JavaScript", "Quiz", "Interactive"],
        icon: "fas fa-question-circle",
        github: "#",
        demo: "#"
    },
    {
        title: "Consultor de IP",
        description: "Exibição de IP do computador do usuário e que exibe a localização exata do provedor em um Mapa.",
        tags: ["API", "JavaScript", "Map", "Geolocation"],
        icon: "fas fa-map-marker-alt",
        github: "#",
        demo: "#"
    },
    {
        title: "Consultor de CEP",
        description: "Consulta na API oficial de CEP Brasileiro e exibição das informações do CEP inserido.",
        tags: ["API", "JavaScript", "CEP", "JSON"],
        icon: "fas fa-search-location",
        github: "#",
        demo: "#"
    },
    {
        title: "Loja Virtual de Bolsas",
        description: "Loja Virtual Fictícia para exibição de bolsas artesanais.",
        tags: ["E-commerce", "HTML", "CSS", "JavaScript"],
        icon: "fas fa-store",
        github: "#",
        demo: "#"
    },
    {
        title: "To-do List",
        description: "Lista de Afazeres, com opção de Adicionar, excluir tarefas e no final é possível tirar um print da tela.",
        tags: ["JavaScript", "LocalStorage", "DOM"],
        icon: "fas fa-tasks",
        github: "#",
        demo: "#"
    },
    {
        title: "Aulas de Surf",
        description: "Landing Page Fictícia para agendamento de Aulas de Surf.",
        tags: ["Landing Page", "HTML", "CSS", "Responsive"],
        icon: "fas fa-water",
        github: "#",
        demo: "#"
    },
    {
        title: "Caravan",
        description: "Site Fictício de Vendas de passagens e viagens, com várias funcionalidades.",
        tags: ["Travel", "HTML", "CSS", "Bootstrap"],
        icon: "fas fa-bus",
        github: "#",
        demo: "#"
    }
];

// Renderizar projetos
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <i class="${project.icon}"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" target="_blank">
                        <i class="fab fa-github"></i> Código
                    </a>
                    <a href="${project.demo}" class="project-link" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}



// Menu mobile
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Navbar scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '15px 0';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
        header.style.padding = '20px 0';
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navItems.forEach(item => {
        item.classList.remove('active');
        const href = item.getAttribute('href');
        if (href === `#${current}`) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        if (href !== '#' && href !== '') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Animate skill bars on scroll
// ===== ANIMAÇÃO DAS SKILL BARS CORRIGIDA =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillBars.length === 0) return;
    
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight - 100;
    
    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const targetWidth = bar.getAttribute('data-width') || bar.style.width;
        
        // Se a barra estiver visível
        if (barPosition < triggerPoint) {
            // Salva a largura original em um atributo data
            if (!bar.getAttribute('data-width')) {
                bar.setAttribute('data-width', bar.style.width);
            }
            
            // Força a largura para 0 e depois anima
            bar.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
            bar.style.width = '0%';
            
            // Pequeno delay para garantir a transição
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 50);
        }
    });
}

// Também anima ao carregar a página
window.addEventListener('load', () => {
    setTimeout(animateSkillBars, 500);
});

// Anima ao scroll com throttle para melhor performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        requestAnimationFrame(() => {
            animateSkillBars();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Prevent demo link alert
document.querySelectorAll('.project-link, .contact-link, .social-link').forEach(link => {
    if (link.getAttribute('href') === '#') {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Link em desenvolvimento. Em breve disponível!');
        });
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    console.log('Portfólio carregado! 🚀');
});

