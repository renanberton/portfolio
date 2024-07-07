import './style.scss';

function Home() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <header>
        <nav>
          <span>RENAN ALEXANDRE BERTON</span>
          <div className='menu'>
            <button onClick={() => scrollToSection('about')}>Sobre mim</button>
            <button onClick={() => scrollToSection('experiences')}>Experiência</button>
            <button onClick={() => scrollToSection('projects')}>Projetos</button>
            <button onClick={() => scrollToSection('contact')}>Contato</button>
          </div>
        </nav>
      </header>
      <div className="main">
        <div className="box1">
          <span>Olá pessoas!</span>
          <span>Seja bem-vindo ao meu Portifólio</span>
          <p>EU SOU UM PROGRAMADOR</p>
          <div className='box-button'>
            <button onClick={() => scrollToSection('about')}>Sobre mim</button>
            <div className='box-social'>
              <a href="https://www.figma.com/design/rljVZ1ZahbrFXiHK0azw7P/Portf%C3%B3lio?node-id=65-55&t=gJfiaKorhfGfco76-1" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/figma.png" alt="Logo Figma" />
              </a>
              <a href="https://www.github.com/renanberton" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/Git.png" alt="Logo GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/renanberton/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/images/Linkedin.png" alt="Logo Linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="box2">
          <img src="/assets/images/image1.png" alt="Imagem de um programador" />
        </div>
      </div>
    </div>
  );
}

export default Home;
