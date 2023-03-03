import React, { useState } from "react";
import "./SoyEmpresa.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function SoyEmpresa() {
  const servicios = [
    {
      title: "Atracción de talentos",
      description:
        "Nuestra consultora se encarga de ayudar a las empresas a encontrar el talento adecuado para sus necesidades. Nos enfocamos en identificar y atraer a los candidatos más calificados y adecuados para las posiciones que nuestros clientes necesitan cubrir.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670331/atraccion_de_talento_y1tigj.jpg",
    },
    {
      title: "Servicio de psicotécnicos.",
      description:
        "Los psicotécnicos son una herramienta útil para evaluar a los candidatos en términos de habilidades y aptitudes. Ofrecemos un servicio de psicotécnicos para nuestros clientes, ayudándoles a tomar decisiones informadas en la selección de candidatos y la gestión de su personal.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670754/serviciopsico_monhjd.jpg",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div>
      <NavBar />
      <div className="services">
        <h2>Nuestros servicios para empresas</h2>
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

export default SoyEmpresa;
