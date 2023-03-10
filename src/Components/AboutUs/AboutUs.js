import React from "react";
import { Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./about.css";
import profileImg from "./profile.jpeg";

function AboutUs() {
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");
  return (
    <Box
      id="about-us"
      p={{ base: 4, md: 8 }}
      maxW={{ base: "100%", md: "80%" }}
      mx="auto"
      
    >
      <Link to="/#about-us"></Link>
      <Box display={["flex"]}>
          <Heading
            as="h1"
            fontSize={["20px", "28px", "36px"]}
            mb={{ base: 6, md: 6}}
            mt={["5%", "5%"]}
            font-family="'Montserrat', sans-serif"
            textAlign={"center"}
             marginLeft={["10%", "0%", "0%"]} 
          >
            ¿QUIENES
          </Heading>
          <Heading
            as="h1"
            mb={{ base: 7, md: 8 }}
            mt={["5%", "5%"]}
            textAlign={"center"}
            marginLeft={["2%", "1%"]} 
            color={"#446b9c"}
            font-weight=" bold"
            fontSize={["20px", "28px", "36px"]}
            font-family="'Montserrat', sans-serif"
          >
           SOMOS?
          </Heading>
        </Box>
      <Text fontSize={["13px","15px","18px"]} textAlign={["center","left","left"]} color={textColor} w={["90%","100%"]} >
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
      <Box className="aboutChicas" justifyContent="center" >
        <Box display={"flex"} justifyContent="center" /* marginLeft={["-12%","20%"]} */ >
          <Box className="aboutImgContainer" justifyContent="center" >
            <Link to="/aboutSabrina">
              <Image
                src="https://res.cloudinary.com/dmuudt7dt/image/upload/v1678451275/Dise%C3%B1o_sin_t%C3%ADtulo_29_mpvboa.png"
                w={["64.5%", "50%", "50%","35%"]}
                alt="Foto de perfil de Sabrina"
                className="aboutImg"
                justifyContent="center"
                 marginLeft={["4%","40%","20%","40%"]} 
              />
              <Text
                as="h3"
                font-family="'Montserrat', sans-serif"
                fontSize={["11px","14.4px","13.5px", "16px"]}
                className="aboutName"
                textAlign="center"
                marginRight={["26%","-30%","9%", "-15%"]}
                color={textColor}
              >
                SABRINA REIRIS
              </Text>
            </Link>
          </Box>
          <Box className="aboutImgContainer" ml={[0, 4]}>
            <Link to="/aboutNahir">
              <Image
                src="https://res.cloudinary.com/dmuudt7dt/image/upload/v1678449546/Dise%C3%B1o_sin_t%C3%ADtulo_27_e8wfvb.png"
                w={["65%","50%", "50%", "35%"]}
                height={"auto"}
                crop={"fill"}
                alt="Foto de perfil de Nahir"
                className="aboutImg"
                marginLeft={["1%","23%","25%"]} 
              />
              <Text
                font-family="'Montserrat', sans-serif"
                as="h3"
                fontSize={["10.5px","13.5px","13.5px", "16px"]}
                className="aboutName"
                textAlign="center"
                marginRight={["33%","5%","0%", "14%"]}
                color={textColor}
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
