import { Box, Text, Image, useMediaQuery, Flex,IconButton, } from "@chakra-ui/react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import profileImg from "./profile.jpeg"


function AboutSabrina () {
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)");

  return (
    <Box>
      <NavBar/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Box >
        <Text fontWeight="bold" fontSize={["20px","22px", "35"]} mb="4" display={"flex"}  ml={["0%","0%","0%","-65%","-72%","-76%"]} mt={["-11%","-4%","0%"]} justifyContent={"center"}>
          Acerca de mi
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
        <Box mr="6" width={["100%","100%","45%","24%"]}>
          <Image
            borderRadius="full"
            boxSize="200"
            src={profileImg}
            alt="Foto de perfil"
          />
        </Box>
      )}
      
      <Box w={["120%","100%","55%","45%"]}  display={"grid"} justifyContent={"center"} mr={["6%","5%","15%","32%"]}>
      <Text fontSize={["12px","14px","18px","17px"]} fontWeight="bold" color={"rgb(89, 109, 190)"}>
        Sabrina Reiris.

        </Text>
        <Text fontSize={["12px","14px","15px","16px"]}>
        Soy una profesional de Recursos Humanos con más de 6 años de experiencia en reclutamiento, selección y consultoría para empresas de primer nivel nacional e internacional. 
        Me caracterizo por ser una persona responsable, proactiva y empática, que siempre busca nuevos desafíos. Busco constantemente superarme y alcanzar mis objetivos, 
        me considero una persona muy resolutiva. 
        Estas competencias me llevan a trabajar por y para el cumplimiento de objetivos disfrutando de asumir nuevos desafíos y del aprendizaje continuo.

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
          marginLeft={["0%", "0%", "-3%","-32%", "-35%", "-35%", "-35%"]}
        >
          
          <a
            href="https://www.linkedin.com/in/sabrinareiris"
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

export default AboutSabrina ;
