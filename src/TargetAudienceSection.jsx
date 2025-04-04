import "./TargetAudienceSection.css";
import { FaCheckCircle } from "react-icons/fa";

const items = [
  "Pequenas empresas que querem profissionalizar sua presença online",
  "Profissionais autônomos que desejam transmitir autoridade e confiança",
  "Marcas que buscam um site bonito, leve e funcional",
  "Negócios que precisam de uma vitrine digital que realmente converta",
  "Quem valoriza um processo claro, com acompanhamento e suporte humanizado",
];

const TargetAudienceSection = () => {
  return (
    <section className="audience-section">
      <div className="audience-container">
        <h2 className="audience-title">🎯 Para Quem é a Villuti?</h2>
        <p className="audience-subtitle">
          Na dúvida se a Villuti é pra você? A gente te responde com clareza:
        </p>
        <ul className="audience-list">
          {items.map((item, index) => (
            <li key={index} className="audience-item">
              <FaCheckCircle className="audience-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="audience-final">
          💡 Se você se viu em alguma dessas descrições... a Villuti é pra você!
        </p>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
