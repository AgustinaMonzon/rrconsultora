import React, { useState } from "react";
import "./Services.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Services() {
  const servicios = [
    {
      title: "Atracción de talentos",
      description:
        "Nuestra consultora se encarga de ayudar a las empresas a encontrar el talento adecuado para sus necesidades. Nos enfocamos en identificar y atraer a los candidatos más calificados y adecuados para las posiciones que nuestros clientes necesitan cubrir.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670331/atraccion_de_talento_y1tigj.jpg",
    },
    {
      title: "Asesoría Laboral",
      description:
        "Brindamos asesoría a nuestros clientes en temas laborales, como la elaboración de contratos, la gestión de relaciones laborales, el cumplimiento de leyes y regulaciones laborales, entre otros temas.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677671014/asesoria_wayry0.jpg",
    },
    {
      title: "Confección de CVS.",
      description:
        "Sabemos que el CV es la primera impresión que los empleadores tienen de los candidatos, por lo que nos aseguramos de que el CV de nuestros clientes sea profesional, claro y convincente. Nos encargamos de elaborar CVs personalizados para cada candidato, destacando sus habilidades, experiencia y logros.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670754/CVSERVICIO_vi7pdu.jpg",
    },
    {
      title: "Servicio de armado de LinkedIn",
      description:
        " LinkedIn es una herramienta poderosa para la búsqueda de empleo y la construcción de redes profesionales. Nuestra consultora ofrece un servicio de armado de perfiles de LinkedIn para nuestros clientes, asegurándonos de que su perfil sea atractivo y destacando su experiencia y habilidades.",
      image:
        "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677670754/servicioDELINKEDIN_hv2va0.png",
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
