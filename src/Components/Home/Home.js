import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Carrousel from "./Carrousel";
import AboutUs from "../AboutUs/AboutUs";
import Valores from "../Valores/Valores";
import Empresas from "../Empresas/Empresas";

import "./Home.css";

function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Box flexGrow={1}>
        <Box mt={{ base: 20, md: 20 }}>
          <Carrousel />
        </Box>
        <Box mb={10} mt={20}>
          <AboutUs />
        </Box>
        <Box mb={10} mt={20}>
          <Valores />
        </Box>
        <Box mb={10} mt={20}>
          <Empresas />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
