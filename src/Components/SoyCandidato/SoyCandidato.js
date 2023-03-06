import React from "react";
import Navbar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";
import "./SoyCandidato.css";

function SoyCandidato() {
  function scrollToContact() {
    const contactElement = document.getElementById("contact");
    contactElement.scrollIntoView({ behavior: "smooth" });
  }

  const servicios = [
    {
      title: "Asesoría Laboral",
      description:
        "Brindamos asesoría a nuestros clientes en temas laborales, como la elaboración de contratos, la gestión de relaciones laborales, el cumplimiento de leyes y regulaciones laborales, entre otros temas.",
    },
    {
      title: "Confección de CVs",
      description:
        "Sabemos que el CV es la primera impresión que los empleadores tienen de los candidatos, por lo que nos aseguramos de que el CV de nuestros clientes sea profesional, claro y convincente. Nos encargamos de elaborar CVs personalizados para cada candidato, destacando sus habilidades, experiencia y logros.",
    },
    {
      title: "Servicio de armado de LinkedIn",
      description:
        "LinkedIn es una herramienta poderosa para la búsqueda de empleo y la construcción de redes profesionales. Nuestra consultora ofrece un servicio de armado de perfiles de LinkedIn para nuestros clientes, asegurándonos de que su perfil sea atractivo y destacando su experiencia y habilidades.",
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="content">
          <h2
            style={{
              fontSize: "2.5rem",
              margin: "0 0 20px",
              background: "linear-gradient(135deg, #4b749c, #92dde8, #dfeef0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            SOY CANDIDATO
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
      <Contact id="contact" />
    </div>
  );
}

export default SoyCandidato;
