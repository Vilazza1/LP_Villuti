import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Home.jsx";
import Carousel from "./carouselData.jsx";
import SobreNos from './sobreNos.jsx'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Carousel />
    <SobreNos />
  </StrictMode>
);
