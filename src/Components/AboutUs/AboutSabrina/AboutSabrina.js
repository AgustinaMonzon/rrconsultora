import {
  Box,
  Text,
  Image,
  useMediaQuery,
  Flex,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "../../NavBar/NavBar";
import Footer from "../../Footer/Footer";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import profileImg from "./profile.jpeg";

function AboutSabrina() {
  const [isLargerThan640] = useMediaQuery("(min-width: 640px)");
  const textColor = useColorModeValue("gray.700", "whiteAlpha.900");

  return (
    <Box>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box>
        <Text
          fontWeight="bold"
          fontSize={["22px", "24px", "35"]}
          mb="4"
          display={"flex"}
          ml={["-8%", "-8%", "-8%", "-65%", "-72%", "-76%"]}
          mt={["-11%", "-4%", "0%"]}
          justifyContent={"center"}
          color={textColor}
        >
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
        p={["50px", "40px", "20"]}
      >
        {isLargerThan640 && (
          <Box mr="6" width={["100%", "100%", "45%", "22%"]}>
            <Image
              w={["65%", "50%", "50%", "55%"]}
              alt="Foto de perfil de Nahir"
              className="aboutImg"
              marginLeft={["1%", "23%", "25%"]}
              borderEndEndRadius="50%"
              src="https://res.cloudinary.com/dmuudt7dt/image/upload/v1678449750/Dise%C3%B1o_sin_t%C3%ADtulo_28_ke5gkq.png"
            />
          </Box>
        )}

        <Box
          w={["120%", "100%", "55%", "45%"]}
          display={"grid"}
          justifyContent={"center"}
          mr={["6%", "5%", "15%", "32%"]}
        >
          <Text
            fontSize={["12px", "14px", "18px", "17px"]}
            fontWeight="bold"
            color={"#446b9c"}
          >
            Sabrina Reiris.
          </Text>
          <Text fontSize={["12px", "14px", "15px", "16px"]} color={textColor}>
            Soy una profesional de Recursos Humanos con más de 6 años de
            experiencia en reclutamiento, selección y consultoría para empresas
            de primer nivel nacional e internacional. Me caracterizo por ser una
            persona responsable, proactiva y empática, que siempre busca nuevos
            desafíos. Busco constantemente superarme y alcanzar mis objetivos,
            me considero una persona muy resolutiva. Estas competencias me
            llevan a trabajar por y para el cumplimiento de objetivos
            disfrutando de asumir nuevos desafíos y del aprendizaje continuo.
          </Text>
        </Box>
        {!isLargerThan640 && (
          <Box mt="6">
            <Image
              w={["65%", "50%", "50%", "55%"]}
              alt="Foto de perfil de Nahir"
              className="aboutImg"
              marginLeft={["1%", "23%", "25%"]}
              borderEndEndRadius="50%"
              src="https://res.cloudinary.com/dmuudt7dt/image/upload/v1678449750/Dise%C3%B1o_sin_t%C3%ADtulo_28_ke5gkq.png"
            />
          </Box>
        )}
      </Box>
      <Flex
        justifyContent={"center"}
        marginLeft={["0%", "0%", "-3%", "-32%", "-35%", "-35%", "-35%"]}
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
      <Footer />
    </Box>
  );
}

export default AboutSabrina;
