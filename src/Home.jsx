import { useState } from "react";
import "./home.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <img src="src/assets/logo.png" alt="Villuti Logo" className="logo" />

        {/* BOTÃO MENU MOBILE */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* NAVBAR */}
        <nav className={`navBar ${menuOpen ? "active" : ""}`}>
          <ul>
            <li onClick={() => setMenuOpen(false)}>Home</li>
            <li onClick={() => setMenuOpen(false)}>Nossa Proposta</li>
            <li onClick={() => setMenuOpen(false)}>Sobre Nós</li>
            <li onClick={() => setMenuOpen(false)}>Stack</li>
            <li onClick={() => setMenuOpen(false)}>Nosso Processo</li>
            <li onClick={() => setMenuOpen(false)}>Para Quem</li>
          </ul>
        </nav>
      </header>

      {/* SEÇÃO HOME */}
      <div className="home">
        <div className="box-home">
          <div className="text-container">
            <h1>Tenha um site profissional e venda mais com a Villuti!</h1>
            <p>
              Está na hora de levar sua empresa para o próximo nível! Na Villuti, criamos sites modernos, rápidos e otimizados para que seu negócio seja visto em todo o Brasil.
            </p>
            <ul>
              <li>Atraia mais clientes com um site profissional</li>
              <li>Apareça no Google e destaque-se da concorrência</li>
              <li>Aumente suas vendas com um site responsivo e estratégico</li>
              <li>Seja encontrado, conquiste mais clientes e venda mais!</li>
              <li>Entre em contato agora e transforme sua presença digital!</li>
            </ul>
            <button className="btn">Entre em Contato</button>
          </div>
          <div className="image-container">
            <img src="src/assets/home.png" alt="Ilustração Home" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
