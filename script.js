// Dados dos projetos
const projects = [
    {
        title: "Dj Leo Casagrande - Curso de DJ profissional",
        description: "Página de curso profissionalizante de DJ, focada em SEO e auta conversão de vendas.",
        tags: ["HTML", "CSS", "JavaScript", "SEO"],
        icon: "fas fa-headphones",
        github: "https://github.com/renanberton/landing-page-leocasagrande3",
        demo: "https://renanberton.github.io/landing-page-leocasagrande3/"
    },
    {
        title: "Dj Leo Casagrande - Segredo dos DJ's",
        description: "Página de curso profissionalizante de DJ, focada em SEO e auta conversão de vendas.",
        tags: ["HTML", "CSS", "JavaScript", "SEO"],
        icon: "fas fa-sliders",
        github: "https://github.com/renanberton/landing-page-casagrande",
        demo: "https://renanberton.github.io/landing-page-casagrande/"
    },
    {
        title: "BD Soluções - E-commerce de soluções magnéticas.",
        description: "Mock-up de venda de soluções magnéticas para area industrial.",
        tags: ["HTML", "CSS", "JavaScript", "SEO"],
        icon: "fas fa-magnet",
        github: "https://github.com/renanberton/bd-solucoes-magneticas",
        demo: "https://renanberton.github.io/bd-solucoes-magneticas/index.html"
    },
    {
        title: "Pokédex - React",
        description: "Projeto que consome a API Oficial do Pokémon e exibe os mesmos, com opção de pesquisar e listar todos.",
        tags: ["React", "API", "JavaScript", "CSS"],
        icon: "fas fa-dragon",
        github: "https://github.com/renanberton/pokedex-react",
        demo: "https://pokedex-renan.netlify.app/"
    },
    {
        title: "Calcule Aki",
        description: "Projeto que contém diversas calculos para facilitar vários cálculos que fazemos no dia-a-dia.",
        tags: ["JavaScript", "HTML", "CSS"],
        icon: "fas fa-calculator",
        github: "https://github.com/renanberton/Calculadoras",
        demo: "https://renanberton.github.io/Calculadoras/"
    },
    {
        title: "Bikcraft",
        description: "Site de Exposição de bicicletas, desenvolvido para aperfeiçoar meus conhecimentos em desenvolvimento WEB.",
        tags: ["HTML", "CSS", "JavaScript", "Responsive"],
        icon: "fas fa-bicycle",
        github: "https://github.com/renanberton/Bikcraft",
        demo: "https://renanberton.github.io/Bikcraft/"
    },
    {
        title: "Jogo da Memória Pokémon",
        description: "Jogo da memória Pokémon, desenvolvido para aprender a usar Javascript e seus fundamentos.",
        tags: ["JavaScript", "Game", "CSS", "HTML"],
        icon: "fas fa-brain",
        github: "https://github.com/renanberton/Jogo-da-Mem-ria",
        demo: "https://renanberton.github.io/Jogo-da-Mem-ria/"
    },
    {
        title: "Quiz",
        description: "Jogo de perguntas e respostas e pontuação final.",
        tags: ["JavaScript", "Quiz", "Interactive"],
        icon: "fas fa-question-circle",
        github: "https://github.com/renanberton/quiz",
        demo: "https://renanberton.github.io/quiz/"
    },
    {
        title: "Consultor de CEP",
        description: "Consulta a API oficial de CEP's e exibe as informações.",
        tags: ["API", "JavaScript", "CEP", "JSON"],
        icon: "fas fa-search-location",
        github: "https://github.com/renanberton/viaCEP",
        demo: "https://consute-seu-cep.netlify.app/"
    },
    {
        title: "To-do List",
        description: "Lista de afazeres, com opção de Adicionar, excluir tarefas e no final salva-se 1 print das tarefas.",
        tags: ["JavaScript", "LocalStorage", "DOM"],
        icon: "fas fa-tasks",
        github: "https://github.com/renanberton/to-do-list",
        demo: "https://renanberton.github.io/to-do-list/"
    },
    {
        title: "Caravan",
        description: "Site Fictício de Vendas de passagens e viagens, com várias funcionalidades.",
        tags: ["Travel", "HTML", "CSS", "Bootstrap"],
        icon: "fas fa-bus",
        github: "https://github.com/renanberton/caravan-bootstrap",
        demo: "https://renanberton.github.io/caravan-bootstrap/"
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

