import React, { useRef } from "react";
import "./SoyEmpresa.css";
import NavBar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";

function SoyEmpresa() {
  const servicios = [
    {
      title: "Atracción de talentos",
      description:
        "La Asesoría Laboral está dirigida tanto para aquellas personas que no tienen trabajo  como para quienes tienen la intención de cambiar o expandirse a un nuevo rubro en el mercado laboral.",

      lista: [
        "Mediante este servicio te preparamos para diversas modalidades de entrevistas, con el objetivo de aumentar tus posibilidades de avanzar en los procesos de selección.​",
        "Te ayudamos a mejorar tus habilidades a la hora de responder las preguntas en tus entrevistas laborales.",
        "Te brindamos los consejos y herramientas necesarias para que puedas desenvolverte de forma eficiente y cuales son las preguntas frecuentes que pueden hacerte.",
      ],
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
          <h2 className="my-headingEm">
            NUESTROS SERVICIOS <span>PARA EMPRESAS</span>
          </h2>

          <ul>
            {servicios.map((servicio, index) => (
              <li key={index}>
                <h3>{servicio.title}</h3>
                <p>{servicio.description}</p>
                <ul>
                  {servicio.lista.map((descripcion, i) => (
                    <li key={i}>{descripcion}</li>
                  ))}
                </ul>
                <button
                  onClick={scrollToContact}
                  style={{
                    background:
                      "linear-gradient(135deg, #4b749c, #92dde8, #e9f8fa)",
                    color: "#2b2c64",
                    border: "2px solid ##e9f8fa",
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
