import './style.scss'

const projects = [
  {
    id: 1,
    imgSrc: '/assets/images/pokedex.png',
    title: 'Pokédex - React',
    description: 'Projeto que consome a API Oficial do Pokémon e exibe os mesmos, com opção de pesquisar e listar todos.',
    link: 'https://pokedex-renan.netlify.app/'
  },
  {
    id: 2,
    imgSrc: '/assets/images/calculeaki.png',
    title: 'Calcule Aki',
    description: 'Projeto que contém diversas calculadoras para facilitar vários cálculos que fazemos no dia-a-dia.',
    link: 'https://renanberton.github.io/Calculadoras/'
  },
  {
    id: 3,
    imgSrc: '/assets/images/bikcraft.png',
    title: 'Bikcraft',
    description: 'Site de Exposição de bicicletas, desenvolvido para aperfeiçoar meus conhecimentos em desenvolvimento WEB.',
    link: 'https://renanberton.github.io/Bikcraft/'
  },
  {
    id: 4,
    imgSrc: 'https://camo.githubusercontent.com/49986b13cd39a50bbfdbc35b1a150166a8b4b4e303e3e79c1d0d4efc90d64d7a/68747470733a2f2f692e696d6775722e636f6d2f313366656264682e676966',
    title: 'Jogo da Memória',
    description: 'Jogo da memória Pokémon, desenvolvido para aprender a usar Javascript e seus fundamentos.',
    link: 'https://renanberton.github.io/Jogo-da-Mem-ria/'
  },
  {
    id: 5,
    imgSrc: '/assets/images/quiz.png',
    title: 'Quiz',
    description: 'Jogo de perguntas e respostas, com várias funcionalidades e exibe o total de respostas corretas no final.',
    link: 'https://renanberton.github.io/quiz/'
  },
  {
    id: 6,
    imgSrc: '/assets/images/ip.png',
    title: 'Consultor de IP',
    description: 'Exibição de IP do computador do usuário e que exibe a localização exata do provedor em um Mapa.',
    link: 'https://meu-ip.netlify.app/'
  },
  {
    id: 7,
    imgSrc: '/assets/images/cep.png',
    title: 'Consultor de CEP',
    description: 'Consulta na API oficial de CEP Brasileiro e exibição das informações do CEP inserido.',
    link: 'https://consute-seu-cep.netlify.app/'
  },
  {
    id: 8,
    imgSrc: '/assets/images/bolsas.png',
    title: 'Loja Virtual de Bolsas',
    description: 'Loja Virtual Fictícia para exibição de bolsas artesanais.',
    link: 'https://bolsasbase.web.app/'
  },
  {
    id: 9,
    imgSrc: 'https://camo.githubusercontent.com/fbcc66a6ee70cf1e8e04092ae1a1082b81d853b9d8a980f1128fc79caafa2e45/68747470733a2f2f692e696d6775722e636f6d2f614661496d43772e676966',
    title: 'To-do list - Lista de Tarefas',
    description: 'Lista de Afazeres, com opção de Adicionar, excluir tarefas e no final é possível tirar um print da tela para salvar.',
    link: 'https://renanberton.github.io/to-do-list/'
  },
  {
    id: 10,
    imgSrc: '/assets/images/surf.png',
    title: 'Aulas de Surf',
    description: 'Landing Page Fictícia para agendamento de Aulas de Surf.',
    link: 'https://aloha-surf-school.netlify.app/'
  },
  {
    id: 11,
    imgSrc: '/assets/images/caravan.png',
    title: 'Caravan',
    description: 'Site Fictício de Vendas de passagens e viagens, com várias funcionalidades.',
    link: 'https://renanberton.github.io/caravan-bootstrap/'
  },
];

function Projects() {
  return (
    <div className='container-projects' id="projects">
      <h2>Projetos</h2>
      <div className="test">
        {projects.map((project) => (
          <div key={project.id} className="box-projects">
            <img className='img-project' src={project.imgSrc} alt={`Imagem do ${project.title}`} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className='box-veja-mais'>
                <span>Veja Mais</span>
                <img src="/assets/images/arrow-right 1.png" alt="Seta para a Direita" />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
