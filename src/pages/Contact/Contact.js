import './style.scss';

function Contact() {
   return (
      <div className='container-contact' id="contact">
        <h2>Contatos</h2>
        <p>Gostou do meu perfil? <br /> Entre em contato!</p>
        <div className="box-contacts">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/mail.png" alt="Logo E-mail" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/tell.png" alt="Logo Telefone" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/Linkedin.png" alt="Logo Linkedin" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/whatsapp.png" alt="Logo Whatsapp" />
          </a>
        </div>
    </div>
   )
}

export default Contact;