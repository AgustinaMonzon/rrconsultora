import React from "react";
import Navbar from "../NavBar/NavBar";
import Contact from "../Contact/Contact";
import { Box, Heading, Button } from "@chakra-ui/react";
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
        "La Asesoría Laboral está dirigida tanto para aquellas personas que no tienen trabajo  como para quienes tienen la intención de cambiar o expandirse a un nuevo rubro en el mercado laboral.",
      lista: [
        "Nos encargamos de entrenarte para tu próxima entrevista de empleo.",
        "Mediante este servicio te preparamos para diversas modalidades de entrevistas, con el objetivo de aumentar tus posibilidades de avanzar en los procesos de selección.​",
        "Te ayudamos a mejorar tus habilidades a la hora de responder las preguntas en tus entrevistas laborales.",
        "Te brindamos los consejos y herramientas necesarias para que puedas desenvolverte de forma eficiente y cuales son las preguntas frecuentes que pueden hacerte.",
      ],
    },
    {
      title: "Confección de CVs",
      description:
        "Creamos tu CV con análisis, asesoría, estrategia, redacción profesional y diseño gráfico.",
      lista: [
        "Confeccionamos tu CV desde cero en un servicio online completo.",
        "Trabajamos para vos con absoluta dedicación y compromiso hacia tus objetivos laborales.",
        "Cómo Consultora de Recursos Humanos, hacemos tu CV eficaz, atractivo y profesional para lograr el éxito en las entrevistas laborales, según las últimas tendencias y las mejores prácticas.",
      ],
    },

    {
      title: "Servicio de armado de LinkedIn",
      description:
        "Nos encargamos de confeccionar y diseñar tu perfil de Linkedin de acuerdo a tu experiencia y objetivos profesionales.",
      lista: [
        "Linkedin es la mayor red profesional del mundo por excelencia, por eso, es indispensable que tengas tu perfil actualizado para conseguir las mejores oportunidades de empleo.",
        "Confeccionamos tu Linkedin desde cero en un servicio online completo.",
        "Trabajamos para vos con absoluta dedicación y compromiso hacia tus objetivos laborales.",
        "Hacemos que tu perfil de Linkedin luzca atractivo y profesional para lograr el éxito en tus búsquedas laborales, teniendo en cuenta las últimas tendencias y las mejores prácticas",
      ],
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="container">
        <Box display={["flex"]}>
          <Heading
            as="h1"
            fontSize={["20px", "28px", "36px"]}
            mb={{ base: 6, md: 6 }}
            mt={["-5%", "5%"]}
            font-family="'Montserrat', sans-serif"
            textAlign={"center"}
            marginLeft={["0%", "0%", "0%"]}
          >
            SOY
          </Heading>
          <Heading
            as="h1"
            mb={{ base: 7, md: 8 }}
            mt={["-5%", "5%"]}
            textAlign={"center"}
            marginLeft={["2%", "1%"]}
            color={"#446b9c"}
            font-weight=" bold"
            fontSize={["20px", "28px", "36px"]}
            font-family="'Montserrat', sans-serif"
          >
            CANDIDATO
          </Heading>
        </Box>
        <div className="content">
          <ul>
            {servicios.map((servicio, index) => (
              <li key={index}>
                <h3>{servicio.title}</h3>
                <p fontSize={["13px", "14px", "13px", "18px"]}>
                  {servicio.description}
                </p>
                <ul>
                  {servicio.lista.map((descripcion, i) => (
                    <li key={i} fontSize={["13px", "14px", "13px", "18px"]}>
                      {descripcion}
                    </li>
                  ))}
                </ul>
                <Button
                  size={["xs", "sm", "md", "md"]}
                  background="linear-gradient(135deg, #4b749c, #92dde8, #e9f8fa)"
                  color="#2b2c64"
                  border="2px solid ##e9f8fa"
                  borderRadius="5px"
                  padding="10px 20px"
                  fontWeight="bold"
                  fontSize="1rem"
                  cursor="pointer"
                  boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                  transition="all 0.3s ease-in-out"
                  onClick={scrollToContact}
                >
                  + MÁS INFO
                </Button>
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
