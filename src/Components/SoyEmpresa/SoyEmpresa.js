import React, { useRef } from "react";
import "./SoyEmpresa.css";
import NavBar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";
import { Heading, Box } from "@chakra-ui/react";

function SoyEmpresa() {
  const servicios = [
    {
      title: "Atracción de talentos",
      description:
        "A través de una búsqueda excepcional encontramos el mejor talento para la organización requerida. Esto lo hacemos mediante  entrevistas con modelos flexibles que nos permiten adecuarnos no solo a las necesidades de nuestros clientes sino también a las de nuestros candidatos, teniendo en cuenta el perfil que se requiere cubrir.",

      lista: [
        "Definición y elaboración del perfil en conjunto.​",
        "Análisis del puesto a cubrir.",
        "Relevamiento personalizado para conocer la cultura propia de cada empresa.",
        "Portales de  búsqueda: base de datos propia, publicación de avisos en diversos medios masivos de comunicación, LinkedIn Recruiter.",
        "Entrevistas para determinar el grado de alineación del candidato a las competencias requeridas.",
        "Acompañamiento y soporte hasta la incorporación.",
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
        <Box display={["grid", "grid", "flex"]}>
          <Heading
            as="h1"
            fontSize={`clamp(20px, 6vw, 36px)`}
            mb={{ base: 6, md: 6 }}
            mt={["-5%", "5%"]}
            fontFamily="'Montserrat', sans-serif"
            marginLeft={["0%", "0%", "0%"]}
            textAlign={["justify", "justify"]}
          >
            NUESTROS SERVICIOS
          </Heading>
          <Heading
            textAlign={["justify", "justify"]}
            as="h1"
            mb={{ base: 7, md: 8 }}
            mt={["-5%", "5%"]}
            marginLeft={["0%", "1%"]}
            color={"#446b9c"}
            fontWeight="bold"
            fontSize={`clamp(20px, 6vw, 36px)`}
            fontFamily="'Montserrat', sans-serif"
          >
            PARA EMPRESAS
          </Heading>
        </Box>
        <div
          className="content"
          fontSize={["13px", "15px", "18px"]}
          textAlign={["justify", "justify"]}
        >
          <ul
            fontSize={["13px", "15px", "18px"]}
            textAlign={["justify", "justify"]}
          >
            {servicios.map((servicio, index) => (
              <li key={index} textAlign={["justify", "justify"]}>
                <h3>{servicio.title}</h3>
                <p
                  fontSize={`clamp(13px, 2.5vw, 18px)`}
                  textAlign={["justify", "justify"]}
                >
                  {servicio.description}
                </p>
                <ul fontSize={["13px", "15px", "18px"]}>
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
