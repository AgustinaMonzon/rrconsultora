import { Box, Text, Image, useMediaQuery, Flex,IconButton, } from "@chakra-ui/react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import profileImg from "./profile.jpeg"


function AboutNahir () {
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)");

  return (
    <Box>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Box>
        <Text  fontWeight="bold" fontSize={["20px","22px", "35"]} mb="4" display={"flex"}  ml={["29%","38%","7%"]} mt={["-18%","-10%","0%"]}>
          Acerca de mí
        </Text>
        </Box>
    <Box
      display="flex"
      flexDirection={isLargerThan640 ? "row" : "column"}
      alignItems="center"
      justifyContent="center"
      borderWidth="1px"
      borderRadius="lg"
      p={["50px","40px","20"]}
    >
      {isLargerThan640 && (
        <Box mr="6" width={["100%","100%","23%"]}>
          <Image
            borderRadius="full"
            boxSize="200"
            src={profileImg}
            alt="Foto de perfil"
          />
        </Box>
      )}
      
      <Box w={["130%","100%","40%"]}  display={"grid"} justifyContent={"center"} mr={["-5%","-5%","31%"]}>
        <Text fontSize={["12px","14px","15px","17px"]}>
        Licenciada en Administración de RRHH recibida en la Universidad del Salvador.
        Cuenta con más de 10 años de experiencia desarrollando distintas funciones de RRHH en empresas pymes y multinacionales.
        Celina trabaja de manera colaborativa junto a un equipo interdisciplinario de profesionales para poder cumplir con las necesidades y expectativas de nuestros clientes.
        </Text>
      </Box>
      {!isLargerThan640 && (
        <Box mt="6">
          <Image
            borderRadius="full"
            boxSize="150px"
            src={profileImg}
            alt="Foto de perfil"
          />
        </Box>
      )}
       
    </Box>
    <Flex
         justifyContent={"center"}
          marginLeft={["0%", "0%", "-23%", "-31%", "-32%", "-35%"]}
        >
          
          <a
            href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              m="5px"
              /* marginTop={"40%"} */
              colorScheme="linkedin"
              icon={<FaLinkedinIn />}
            />
          </a>
          <a
            href="https://github.com/meliveyrat1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              m="5px"
              /* marginTop={"40%"} */
              colorScheme="pink"
              icon={<FaInstagram />}
            />
          </a>
        </Flex>
    <Footer/>
    </Box>
  );
}

export default AboutNahir ;

        

