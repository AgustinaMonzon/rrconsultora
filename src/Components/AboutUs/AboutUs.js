import React from "react";
import { Box, Heading, Text, Image, useColorModeValue, Button } from "@chakra-ui/react";
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
     
      <Box display={["flex"]}>
          <Heading
            as="h1"
            fontSize={["20px", "22px", "28px", "36px"]}
            mb={{ base: 6, md: 6}}
            mt={["5%", "5%"]}
            font-family="'Montserrat', sans-serif"
            textAlign={"center"}
             marginLeft={["21%", "0%", "0%"]} 
          >
            ¿QUIÉNES
          </Heading>
          <Heading
            as="h1"
            mb={{ base: 7, md: 8 }}
            mt={["5%", "5%"]}
            textAlign={"center"}
            marginLeft={["2%", "1%"]} 
            color={"#446b9c"}
            font-weight=" bold"
            fontSize={["20px", "22px", "28px", "36px"]}
            font-family="'Montserrat', sans-serif"
          >
           SOMOS?
          </Heading>
        </Box>
      <Text fontSize={["13px","14px","13px","18px"]} marginLeft={["5%", "0%"]} textAlign={["justify","justify"]} color={textColor} w={["90%","100%"]} >
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
                 marginLeft={["20%","28%","25%","40%"]} 
                 marginTop={["-5%","15%","0%"]}
              />
              {/* <Text
                as="h3"
                font-family="'Montserrat', sans-serif"
                fontSize={["11px","14.4px","13.5px", "16px"]}
                className="aboutName"
                textAlign="center"
                marginRight={["-2%","-7%","0%", "-15%"]}
                color={textColor}
                marginBottom={["15%","-10%","0%"]}
              >
                SABRINA REIRIS
              </Text> */}
                <Button
              as="a"
              color={"black"}
              backgroundColor={"rgba(163, 214, 248, 0.849)"}
              _hover={{ bg: "white" }}
              aria-label="Contact"
              my={0}
              fontSize={["11px","11px","11px","13px"]}
              marginLeft={["25%","30%","46%","40%","48%"]}
              size={["xs", "sm", "sm", "sm"]}
            >
              Sabrina Reiris
            </Button>
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
                marginLeft={["13%","20%","25%"]} 
                marginTop={["-5%","15%","0%"]}
              />
                     <Button
              as="a"
              color={"black"}
              backgroundColor={"rgba(163, 214, 248, 0.849)"}
              _hover={{ bg: "white" }}
              aria-label="Contact"
              my={0}
              fontSize={["8px","11px","11px","13px"]}
              marginLeft={["15%","20%","30%","30%","32%"]}
              size={["xs", "sm", "sm", "sm"]}
            >
              Nahir Reverdito
            </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;
