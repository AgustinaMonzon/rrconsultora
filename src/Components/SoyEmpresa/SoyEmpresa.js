import React, { useRef } from "react";
import "./SoyEmpresa.css";
import NavBar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";

function SoyEmpresa() {
  const servicios = [
    {
      title: "Atracción de talentos",
      description:
        "Nuestra consultora se encarga de ayudar a las empresas a encontrar el talento adecuado para sus necesidades. Nos enfocamos en identificar y atraer a los candidatos más calificados y adecuados para las posiciones que nuestros clientes necesitan cubrir.",
    },
    {
      title: "Servicio de psicotécnicos.",
      description:
        "Los psicotécnicos son una herramienta útil para evaluar a los candidatos en términos de habilidades y aptitudes. Ofrecemos un servicio de psicotécnicos para nuestros clientes, ayudándoles a tomar decisiones informadas en la selección de candidatos y la gestión de su personal.",
    },
  ];

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="content">
          <h2
            style={{
              fontSize: "2.5rem",
              margin: "0 0 20px",
              background: "linear-gradient(135deg, #4b749c, #92dde8, #e9f8fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            NUESTROS SERVICIOS PARA EMPRESAS
          </h2>
          <ul>
            {servicios.map((servicio, index) => (
              <li key={index}>
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
                <button
                  onClick={scrollToContact}
                  style={{
                    background:
                      "linear-gradient(135deg, #4b749c, #92dde8, #e9f8fa)",

                    color: "#2b2c64",
                    border: "2px solid #4b749c",
                    borderRadius: "10px",
                    padding: "10px 20px",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    cursor: "pointer",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  + MÁS INFO
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default SoyEmpresa;
