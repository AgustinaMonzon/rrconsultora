import React, { useState } from "react";
import "./Services.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Services() {
  const servicios = [
    {
      title: "Atracción de talentos",
      description:
        "Creamos sitios web a medida para tus necesidades, utilizando las últimas tecnologías y prácticas recomendadas.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670331/atraccion_de_talento_y1tigj.jpg",
    },
    {
      title: "Asesoría Laboral",
      description:
        "Diseñamos logotipos, banners, flyers y todo tipo de material gráfico para promocionar tu negocio.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677671014/asesoria_wayry0.jpg",
    },
    {
      title: "Confección de CVS.",
      description:
        "Creamos estrategias de marketing digital para aumentar la visibilidad de tu marca y generar más ventas.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670754/CVSERVICIO_vi7pdu.jpg",
    },
    {
      title: "Servicio de armado de LinkedIn",
      description:
        "Creamos estrategias de marketing digital para aumentar la visibilidad de tu marca y generar más ventas.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670754/servicioDELINKEDIN_hv2va0.png",
    },
    {
      title: "Servicio de psicotécnicos.",
      description:
        "Creamos estrategias de marketing digital para aumentar la visibilidad de tu marca y generar más ventas.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670754/serviciopsico_monhjd.jpg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div>
      <NavBar />
      <div className="services">
        <h2>Servicios que ofrecemos</h2>
        <ul>
          {servicios.map((servicio, index) => (
            <li key={index}>
              <div
                className={`service-card ${
                  hoveredIndex === index ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                <img src={servicio.image} alt={servicio.title} />
                <h3 className="service-title">{servicio.title}</h3>
                <p
                  className={`service-description ${
                    hoveredIndex === index ? "visible" : ""
                  }`}
                >
                  {servicio.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
