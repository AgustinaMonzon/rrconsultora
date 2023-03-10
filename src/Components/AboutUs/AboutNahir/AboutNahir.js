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
              src="https://res.cloudinary.com/dmuudt7dt/image/upload/v1678368998/Nahir_i2rcsm.jpg"
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
            Nahir Reverdito.
          </Text>
          <Text fontSize={["12px", "14px", "15px", "16px"]} color={textColor}>
            Profesional apasionada por la selección y atracción de talentos.
            Creo que lo más importante es generar una cálida experiencia tanto
            para el candidato como para la empresa. Licenciada en Recursos
            Humanos (Universidad de Ciencias Empresariales y Sociales,)
            Diplomada en Selección de personal orientado en nuevas tecnologías.
            Me caracterizo por ser una persona organizada, dedicada,
            responsable, que siempre busca cumplir con los objetivos de la mejor
            manera y adaptándose a los cambiantes desafíos del entorno. Disfruto
            trabajando en equipo, con objetivos claros y animada a los desafíos.
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
              src="https://res.cloudinary.com/dmuudt7dt/image/upload/v1678368998/Nahir_i2rcsm.jpg"
            />
          </Box>
        )}
      </Box>
      <Flex
        justifyContent={"center"}
        marginLeft={["0%", "0%", "-3%", "-32%", "-35%", "-35%", "-35%"]}
      >
        <a
          href="https://www.linkedin.com/in/nahir-reverdito"
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
