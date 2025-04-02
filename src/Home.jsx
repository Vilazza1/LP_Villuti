import "./home.css";

function App() {
  return (
    <>
      <header className="header">
        <img src="src\assets\logo.png" alt="" />
        <div className="navBar">
          <ul>
            <li>Home</li>
            <li>Serviços</li>
            <li>Sobre Nós</li>
            <li>Planos</li>
            <li>Contato</li>
          </ul>
        </div>
      </header>
      <div className="home">
        <div className="box-home">
          <div className="text-container">
            <h1>Tenha um site profissional e venda mais com a Villuti!</h1>
            <p>
              Está na hora de levar sua empresa para o próximo nível! Na
              Villuti, criamos sites modernos, rápidos e otimizados para que seu
              negócio seja visto em todo o Brasil.
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
          <div class="image-container">
            <img src="src\assets\home.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
