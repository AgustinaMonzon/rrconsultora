import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Carrousel from "./Carrousel";
import AboutUs from "../AboutUs/AboutUs";

function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Box flexGrow={1}>
        <Carrousel />
        <AboutUs />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;
