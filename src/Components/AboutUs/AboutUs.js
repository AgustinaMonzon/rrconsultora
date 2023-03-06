import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./about.css";
import profileImg from "./profile.jpeg";

function AboutUs() {
  return (
    <Box
      id="about-us"
      p={{ base: 4, md: 8 }}
      maxW={{ base: "100%", md: "80%" }}
      mx="auto"
    >
      <Link to="/#about-us"></Link>
      <Box display={"flex"}>
        <Heading as="h1" size="xl" mb={{ base: 4, md: 8 }}>
          ¿QUIÉNES
        </Heading>
        <Heading
          as="h1"
          size="xl"
          mb={{ base: 4, md: 8 }}
          marginLeft={"1%"}
          color={"#446b9c"}
        >
          SOMOS?
        </Heading>
      </Box>
      <Text fontSize={{ base: "md", md: "lg" }}>
        Somos RR Consultoría, conformado por dos profesionales innovadoras y
        apasionadas por lo que hacemos. Nos dedicamos a liderar procesos de
        atracción de talentos y brindar soluciones que aporten un plus extra al
        momento de gestionar el recurso más importante que tienen las empresas,
        ¡Las personas!. Nuestra Consultora se basa en la comunicación como
        elemento esencial de toda relación humana, potenciando las capacidades
        internas de los equipos de trabajo. A partir de esto diseñamos y
        desarrollamos un proceso de reclutamiento y selección utilizando
        diferentes herramientas que nos permiten evaluar las habilidades y
        competencias de los candidatos para encontrar al mejor perfil para su
        organización. Nuestro objetivo es buscar el talento que tu empresa
        necesita a través de un proceso ágil e integral.
      </Text>
      <br />
      <br />
      <Box className="aboutChicas" justifyContent="center">
        <Box display={"flex"} justifyContent="center" marginLeft={"20%"}>
          <Box className="aboutImgContainer" justifyContent="center">
            <Link to="/aboutSabrina">
              <Image
                src={profileImg}
                w={["88%", "35%"]}
                alt="Foto de perfil de Sabrina"
                className="aboutImg"
                justifyContent="center"
              />
              <Text
                as="h2"
                font-family="'Montserrat', sans-serif"
                fontSize={["15px", "20px"]}
                className="aboutName"
                textAlign="center"
                marginRight={["0%", "55%"]}
              >
                SABRINA REIRIS
              </Text>
            </Link>
          </Box>
          <Box className="aboutImgContainer" ml={[0, 4]}>
            <Link to="/aboutNahir">
              <Image
                src={profileImg}
                w={["100%", "35%"]}
                alt="Foto de perfil de Nahir"
                className="aboutImg"
              />
              <Text
                font-family="'Montserrat', sans-serif"
                as="h2"
                fontSize={["15px", "20px"]}
                className="aboutName"
                textAlign="center"
                marginRight={["0%", "55%"]}
              >
                NAHIR REVERDITO
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
