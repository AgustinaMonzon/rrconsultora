import { Box } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Carrousel from "./Carrousel";
import AboutUs from "../AboutUs/AboutUs";

function Home() {
  return (
    <Box p={0} height="250vh">
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Carrousel />
      <AboutUs />
      <Footer />
    </Box>
  );
}

export default Home;
