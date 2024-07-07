import './style.scss';

function Contact() {
   return (
      <div className='container-contact' id="contact">
        <h2>Contatos</h2>
        <p>Gostou do meu perfil? <br /> Entre em contato!</p>
        <div className="box-contacts">
          <a href="mailto:renan_berton@yahoo.com.br" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/mail.png" alt="Logo E-mail" />
          </a>
          <a href="tel:+5511976573355" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/tell.png" alt="Logo Telefone" />
          </a>
          <a href="https://www.linkedin.com/in/renanberton/" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/Linkedin.png" alt="Logo Linkedin" />
          </a>
          <a href="https://wa.me/5511976573355" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/whatsapp.png" alt="Logo Whatsapp" />
          </a>
        </div>
    </div>
   )
}

export default Contact;