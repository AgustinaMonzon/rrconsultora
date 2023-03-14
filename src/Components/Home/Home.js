import { Box, Image, Text, Flex, Heading } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Carrousel from "./Carrousel";
import AboutUs from "../AboutUs/AboutUs";
import Valores from "../Valores/Valores";
import Empresas from "../Empresas/Empresas";
import { Link } from "react-router-dom";

import "./Home.css";

// function Card({ title, color, href }) {
//   return (
//     <Box
//       borderRadius="md"
//       boxShadow="md"
//       bg={color}
//       color="white"
//       p={5}
//       w={{ base: "100%", md: "45%", lg: "30%" }}
//       mx={{ base: 0, md: 2 }}
//       my={6}
//     >
//       <Text fontWeight="bold" fontSize="lg" mb={3}>
//         {title}
//       </Text>
//       <Flex justifyContent="space-between">
//         <a href={href}>
//           <Text>Leer más</Text>
//         </a>
//       </Flex>
//     </Box>
//   );
// }
// function Card({ title, color, href }) {
//   return (
//     <Box
//       borderRadius="md"
//       boxShadow="md"
//       bg="#f4fcfd"
//       color="black"
//       p={5}
//       w={{ base: "100%", md: "45%", lg: "30%" }}
//       mx={{ base: 0, md: 2 }}
//       my={6}
//       borderRight={`15px solid ${color}`}
//       borderBottom={`15px solid ${color}`}
//       borderTop={`1px solid ${color}`}
//       borderLeft={`1px solid ${color}`}
//     >
//       <Text fontWeight="bold" fontSize="lg" mb={3}>
//         {title}
//       </Text>
//       <Flex justifyContent="space-between">
//         <a href={href}>
//           <Text bg="rgba(139, 200, 232, 1)" px={2} py={1} borderRadius="md">
//             Leer más
//           </Text>
//         </a>
//       </Flex>
//     </Box>
//   );
// }
function Card({ title, color, href }) {
  const colors = ["#e9f8fa", "#92dde8", "#24244c", "#2b2c64", "#4b749c"];

  return (
    <Box
      borderRadius="lg"
      boxShadow="md"
      bg="#FFFFFF"
      color={"black"}
      p={10}
      w="300px"
      mx={{ base: 0, md: 2 }}
      my={6}
      borderWidth={4}
      borderColor={colors[Math.floor(Math.random() * colors.length)]}
      borderRight={`15px solid ${color}`}
      borderBottom={`15px solid ${color}`}
      transition="all 0.2s ease-in-out"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "lg",
        borderColor: "#92dde8",
      }}
    >
      <Text
        fontFamily="'Montserrat', sans-serif;"
        fontWeight="bold"
        fontSize="xl"
        mb={4}
      >
        {title}
      </Text>
      <a href={href}>
        <Text
          color={color}
          fontWeight="medium"
          fontSize="md"
          _hover={{ color: "#4b749c" }}
        >
          Leer más
        </Text>
      </a>
    </Box>
  );
}

function Home() {
  const handleScrollToAboutUs = () => {
    const aboutUsElement = document.getElementById("about-us");
    aboutUsElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Box flexGrow={1}>
        <Box mt={{ base: 20, md: 20 }}>
          {/* <Carrousel /> */}
          <Image
            justifyContent={"center"}
            marginLeft={["7.5%","7%","15%","20%"]}
            w={["85%","85%","70%","60%"]}
            src="https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677772329/FORTALECIENDO_LA_MANERA_QUE_CONECTAN_LAS_PERSONAS_Y_LAS_EMPRESAS_1_vvctap.png"
          />
        </Box>

        <Link  onClick={handleScrollToAboutUs}>
          <AboutUs />
        </Link>
        <Box mb={10} mt={20}>
          <Valores />
        </Box>
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
            mb={{ base: 0, md: 0}}
            mt={["68%","45%", "0%"]}
            font-family="'Montserrat', sans-serif"
            textAlign={"center"}
             marginLeft={["18%", "0%", "0%"]} 
          >
            NUESTROS
          </Heading>
          <Heading
            as="h1"
            mb={{ base: 0, md: 0 }}
            mt={["68%","45%", "0%"]}
            textAlign={"center"}
            marginLeft={["2%", "1%"]} 
            color={"#446b9c"}
            font-weight=" bold"
            fontSize={["20px", "22px", "28px", "36px"]}
            font-family="'Montserrat', sans-serif"
          >
            SERVICIOS
          </Heading>
        </Box >
          <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            mt={[4,4,6]}
            mb={-20}
            w={["70%","10%","100%"]}
            marginLeft={["15%","45%","0%"]}
            display={["flex", "grid", "flex"]}
          >
            <Card
              title="Atracción de talentos"
              color="#446b9c"
              href="/soyEmpresa"
            />
            <Card
              title="Asesoría Laboral"
              color="#2b2c64"
              href="/soyCandidato"
            />
            <Card
              title="Servicio de armado de LinkedIn"
              color="#2b2c64"
              href="/soyCandidato"
            />

            <Card
              title="Confección de CVS"
              color="#446b9c"
              href="/soyCandidato"
            />
          </Flex>
        </Box>
        <br />
        <br />
        <br />
        <br />
        <Box mb={10} mt={20}>
          <Empresas />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
