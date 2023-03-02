import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./about.css";

function AboutUs() {
  return (
    <Box
      id="about-us"
      p={{ base: 4, md: 8 }}
      maxW={{ base: "100%", md: "80%" }}
      mx="auto"
    >
      <Box display={"flex"}>
        <Heading as="h1" size="xl" mb={{ base: 4, md: 8 }}>
          ¿Quiénes
        </Heading>
        <Heading
          as="h1"
          size="xl"
          mb={{ base: 4, md: 8 }}
          marginLeft={"1%"}
          color={"#446b9c"}
        >
          somos?
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
      <div className="aboutChicas">
        <a href="/aboutSabrina" class="about-link">
          Sabrina
        </a>
        <br />
        <a href="/aboutNahir" class="about-link">
          Nahir
        </a>
      </div>
    </Box>
  );
}

export default AboutUs;
