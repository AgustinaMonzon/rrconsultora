import React from "react";
import Slider from "react-slick";
import "./Carrousel.css";

function Carrousel() {
  const images = [
    {
      url: "https://www.trisul-sa.com.br/blog/wp-content/uploads/2022/04/contrato-de-compra-e-venda.jpeg",
      alt: "Imagen 1",
      caption: "Descripción de la imagen 1",
    },
    {
      url: "https://www.trackmyfone.com/blog/wp-content/uploads/2015/10/empower-employee-TMF.jpg",
      alt: "Imagen 2",
      caption: "Descripción de la imagen 2",
    },
    {
      url: "https://tyzergroup.com/wp-content/uploads/2020/07/group-people-working-out-business-plan-office-3-scaled.jpg",
      alt: "Imagen 3",
      caption: "Descripción de la imagen 2",
    },
    {
      url: "https://archello.s3.eu-central-1.amazonaws.com/images/2019/11/08/02.1573212643.7097.jpg",
      alt: "Imagen 4",
      caption: "Descripción de la imagen 2",
    },
    {
      url: "https://requenayplaza.com/wp-content/uploads/2017/08/requena-y-plaza-proyecto-interiorismo-oficina-gee-madrid.jpg",
      alt: "Imagen 5",
      caption: "Descripción de la imagen 2",
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
