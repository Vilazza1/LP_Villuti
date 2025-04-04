import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home.jsx";
import Carousel from "./carouselData.jsx";
import SobreNos from './sobreNos.jsx'
import Logos from './logos.jsx'
import Clientes from "./clientes.jsx";
import ProcessSection from "./ProcessSection.jsx";
import TargetAudienceSectionl from './TargetAudienceSection.jsx'
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Carousel />
    <SobreNos />
    <Logos />
    <Clientes />
    <ProcessSection />
    <TargetAudienceSectionl />
    <Footer />
  </StrictMode>
);
