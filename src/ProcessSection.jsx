import './ProcessSection.css';
import { FaHandshake, FaPencilRuler, FaCode } from 'react-icons/fa';

const ProcessSection = () => {
  return (
    <section className="process-section">
      <div className="process-container">
        <h2 className="process-title">Como Funciona Nosso Processo</h2>
        <p className="process-subtitle">
          Da primeira conversa à entrega final, você participa de cada etapa com transparência e confiança.
        </p>
        <div className="process-steps">
          <div className="step-card">
            <FaHandshake className="step-icon" />
            <h3 className="step-title">Primeiro Contato</h3>
            <p className="step-description">
              Você responde algumas perguntas básicas para entendermos sua necessidade. Em seguida, alinhamos tudo e fechamos o contrato.
            </p>
          </div>
          <div className="step-card">
            <FaPencilRuler className="step-icon" />
            <h3 className="step-title">Design sob Medida</h3>
            <p className="step-description">
              Nosso designer entra em contato para criar o layout. Você acompanha tudo de perto com reuniões e aprovações.
            </p>
          </div>
          <div className="step-card">
            <FaCode className="step-icon" />
            <h3 className="step-title">Hora do Código</h3>
            <p className="step-description">
              Com o design aprovado, nossos desenvolvedores entram em ação para transformar o projeto em um site moderno e funcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
