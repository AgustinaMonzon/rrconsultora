import React from "react";
import Slider from "react-slick";
import "./Carrousel.css";

function Carrousel() {
  const images = [
    {
      url: "https://www.trisul-sa.com.br/blog/wp-content/uploads/2022/04/contrato-de-compra-e-venda.jpeg",
      alt: "Imagen 1",
    },
    {
      url: "https://www.trackmyfone.com/blog/wp-content/uploads/2015/10/empower-employee-TMF.jpg",
      alt: "Imagen 2",
    },
    {
      url: "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677685588/FORTALECIENDO_LA_MANERA_QUE_CONECTAN_LAS_PERSONAS_Y_LAS_EMPRESAS._3_udmxdi.png",
      alt: "Imagen 3",
    },
    {
      url: "https://archello.s3.eu-central-1.amazonaws.com/images/2019/11/08/02.1573212643.7097.jpg",
      alt: "Imagen 4",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider className="Carrousel" {...settings}>
        {images.map((image, index) => (
          <div className="contenedor-foto" key={index}>
            <img src={image.url} alt={image.alt} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carrousel;
