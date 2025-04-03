import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

const techData = [
  { name: "React.js", description: "Criação de interfaces dinâmicas.", icon: <FaReact color="#61DBFB" size={50} /> },
  { name: "Next.js", description: "Renderização otimizada.", icon: <SiNextdotjs color="black" size={50} /> },
  { name: "Tailwind CSS", description: "Estilização moderna.", icon: <SiTailwindcss color="#38B2AC" size={50} /> },
  { name: "TypeScript", description: "Código mais seguro.", icon: <SiTypescript color="#007ACC" size={50} /> },
  { name: "JavaScript", description: "Linguagem essencial.", icon: <FaJs color="#F7DF1E" size={50} /> },
  { name: "CSS3", description: "Estilização avançada.", icon: <FaCss3Alt color="#1572B6" size={50} /> },
  { name: "HTML5", description: "Estruturação web.", icon: <FaHtml5 color="#E34F26" size={50} /> },
];

const TechCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="tech-carousel-container">
      <Slider {...settings}>
        {techData.map((tech, index) => (
          <div key={index} className="tech-carousel-card">
            {tech.icon}
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechCarousel;
