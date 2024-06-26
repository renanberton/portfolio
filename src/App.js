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
          <button>
            <a href="/">Sobre mim</a>
          </button>
        </div>
        <div className="box2">
          <img src="/assets/images/image1.png" alt="" />
        </div>
      </div>

    </div>
  );
}

export default App;
