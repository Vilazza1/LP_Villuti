import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <h3>Villuti</h3>
          <p>Transformando ideias em sites incríveis.</p>
        </div>

        <div className="footer-links">
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#process">Como Funciona</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Fale Conosco</h4>
          <p>Email: contato@villuti.com</p>
          <p>WhatsApp: (xx) xxxxx-xxxx</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Villuti. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
