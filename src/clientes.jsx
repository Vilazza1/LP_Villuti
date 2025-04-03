import "./clientes.css";
import TechCarousel from "./TechCarousel.jsx"; // Importando o carrossel

function Clientes() {
  return (
    <div className="box__clientes">
      <div className="clientes">
        <div className="clientes_texto">
          <h1>Por que nossos clientes confiam na Villuti?</h1>
          <p>
            Na Villuti, utilizamos as melhores tecnologias do mercado para
            garantir qualidade, performance e inovação em nossos projetos. Aqui
            estão algumas das principais tecnologias que utilizamos:
          </p>
        </div>
      </div>
      <div className="tech-carousel-container">
        <TechCarousel />
      </div>
    </div>
  );
}

export default Clientes;
