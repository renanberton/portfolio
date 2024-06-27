import './App.scss';

function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <span>RENAN ALEXANDRE BERTON</span>
          <div className='menu'>
            <a href="/">sobre mim</a>
            <a href="/">experiência</a>
            <a href="/">projetos</a>
            <a href="/">contato</a>
          </div>
        </nav>
      </header>
      <div className="main">
        <div className="box1">
          <span>Olá pessoas!</span>
          <span>Seja bem-vindo ao meu Portifólio</span>
          <p>EU SOU UM PROGRAMADOR</p>
          <div className='box-button'>
            <button>
              <a href="/">Sobre mim</a>
            </button>
            <div className='box-social'>
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
          <img src="/assets/images/image1.png" alt="" />
        </div>
      </div>

    </div>
  );
}

export default App;
