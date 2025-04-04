import React from "react";
import Slider from "react-slick";
import carouselItems from "./carouselData";
import "./Carousel.css";

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "50px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        }
      }
    ]
  };

  return (
    <div className="carousel-container">
      <h2 className="title">Transforme sua Presença Digital com a Villuti!</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <div className="icon">{item.icon}</div>
            <h3 className="item-title">{item.title}</h3>
            <p className="item-text">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
