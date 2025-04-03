import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./logos.css";

function Logos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Tempo de transição
    slidesToShow: 5, // Quantidade de logos visíveis
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Tempo entre cada rolagem
    cssEase: "linear",
    pauseOnHover: false,
  };

  return (
    <div className="box_logo">
      <Slider {...settings}>
        <div>
          <img src="src/assets/Logo-6.png" alt="Logo 1" />
        </div>
        <div>
          <img src="src/assets/Logo-7.png" alt="Logo 2" />
        </div>
        <div>
          <img src="src/assets/Logo-9.png" alt="Logo 3" />
        </div>
        <div>
          <img src="src/assets/logo5.png" alt="Logo 5" />
        </div>
        <div>
          <img src="src/assets/logo8.png" alt="Logo 6" />
        </div>
        <div>
          <img src="src/assets/logo9.png" alt="Logo 7" />
        </div>
      </Slider>
    </div>
  );
}

export default Logos;
