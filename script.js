// ===== DADOS DOS PROJETOS =====
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

// ===== RENDERIZAR PROJETOS =====
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

// ===== MENU MOBILE =====
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

// ===== NAVBAR SCROLL EFFECT =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.style.background = 'rgba(10, 10, 10, 0.95)';
        header.style.padding = '15px 0';
    } else {
        header.style.background = 'rgba(10, 10, 10, 0.8)';
        header.style.padding = '20px 0';
    }
});

// ===== ACTIVE NAV LINK ON SCROLL =====
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

// ===== SMOOTH SCROLL =====
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

// ===== SKILL BARS - ANIMAÇÃO ÚNICA (CORRIGIDA) =====
let skillsAnimated = false;

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        // Salva a largura alvo no atributo data-width
        const width = bar.style.width;
        if (width && !bar.getAttribute('data-width')) {
            bar.setAttribute('data-width', width);
        }
        // Começa com largura 0
        bar.style.width = '0%';
        bar.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
    });
}

function animateSkillBars() {
    // Se já animou, não faz nada
    if (skillsAnimated) return;
    
    const skillBars = document.querySelectorAll('.skill-progress');
    if (skillBars.length === 0) return;
    
    const skillsSection = document.querySelector('#skills');
    if (!skillsSection) return;
    
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Se a seção de skills estiver visível (com margem de 100px)
    if (sectionPosition < windowHeight - 100) {
        skillBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-width');
            if (targetWidth && targetWidth !== '0%') {
                bar.style.width = targetWidth;
            } else if (bar.style.width !== '0%') {
                // Fallback: usa o width atual se não tiver data-width
                const currentWidth = bar.style.width;
                if (currentWidth && currentWidth !== '0%') {
                    bar.style.width = currentWidth;
                } else {
                    bar.style.width = '85%'; // valor padrão
                }
            }
        });
        skillsAnimated = true;
        console.log('✅ Skill bars animadas com sucesso!');
    }
}

// Inicializa as skill bars
initSkillBars();

// Tenta animar ao carregar
window.addEventListener('load', () => {
    setTimeout(animateSkillBars, 500);
});

// Anima ao scroll (apenas se ainda não animou)
window.addEventListener('scroll', () => {
    if (!skillsAnimated) {
        requestAnimationFrame(animateSkillBars);
    }
});

// ===== BACK TO TOP =====
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

// ===== PREVENIR LINKS VAZIOS =====
document.querySelectorAll('.project-link, .contact-link, .social-link').forEach(link => {
    if (link.getAttribute('href') === '#') {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Link em desenvolvimento. Em breve disponível!');
        });
    }
});

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    console.log('🚀 Portfólio carregado com sucesso!');
});