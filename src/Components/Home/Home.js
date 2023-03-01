import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Carrousel from "./Carrousel";
import AboutUs from "../AboutUs/AboutUs";
import Slider from "react-slick";
import "./Home.css";

function Home() {
  return (

    <Box  display="flex" flexDirection="column" minHeight="100vh">

   
      <NavBar />
      <Box flexGrow={1}>
        <Box mt={{ base: 20, md: 40 }}>
          <Carrousel />
        </Box>
        <Box mb={10}>
          <AboutUs />
        </Box>

        <Box display={"flex"}/*  backgroundColor={"rgba(233, 225, 225, 0.636)"} */
         justifyContent={"center"} p="25px" marginLeft={"-47%"}>
        <Heading as="h1" size="xl" mb={{ base: 4, md: 8 }} /* marginRight={"47%"} */>
          Valores en
        </Heading>
        <Heading
          as="h1"
          size="xl"
          mb={{ base: 4, md: 8 }}
          marginLeft={"1%"}
          color={"rgb(89, 109, 190)"}
        >
          RR Consultoría
        </Heading>
      </Box>
      <Box /* backgroundColor={"rgba(233, 225, 225, 0.636)"} */ paddingBottom="20px"
       justifyContent={"center"} display={"grid"} marginBottom={"5%"}   marginLeft={"-67%"}>
      <Text fontSize={{ base: "md", md: "lg" }}>
     Profesionalismo
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }}>
      Empatía
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }}>
      Honestidad
      </Text>
      <Text fontSize={{ base: "md", md: "lg" }}>
      Flexibilidad
      </Text>
      </Box>
   
          
        <Box bg="blue.100" py={6}>
          <Box maxW="2xl" mx="auto" px={6}>
            <Box
              mb={6}
              fontSize="1xl"
              fontWeight="bold"
              textAlign="center"
              display="flex"
              alignItems="center"
              flexDirection={{ base: "column", md: "row" }}
            >
              <Heading
                as="h1"
                size="xl"
                mb={{ base: 4, md: 8 }}
                mr={{ md: "2%" }}
              >
                Empresas que confiaron en
              </Heading>
              <Heading
                as="h1"
                size="xl"
                mb={{ base: 4, md: 8 }}
                color={"rgb(89, 109, 190)"}
              >
                nosotros
              </Heading>
            </Box>
            <CarrouselEmpresas />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

function CarrouselEmpresas() {
  const imgStyle = {
    margin: "10px 20px",
    maxHeight: "150px",
    maxWidth: "150px",
    marginRight: "100px",
  };

  const containerStyle = {
    maxWidth: "150%",
  };

  const images = [
    {
      url: "https://res.cloudinary.com/dc9ofeyv7/image/upload/c_scale,h_220/v1677668545/WhatsApp_Image_2023-03-01_at_08.00.56_ijm4ue.jpg",
      alt: "Delicious",
      link: "http://deliciouscafe.com.ar/?fbclid=IwAR2SqSw7mTLgYzYoXMAzA_0qyw2FcU-bK4pgn9Qx1wXrxCePuPxoB_AYXYQs",
    },
    {
      url: "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677668544/WhatsApp_Image_2023-03-01_at_07.57.57_hwyrxw.jpg",
      alt: "ENVAPLAST",
      link: "https://www.envaplast.com.ar/,",
    },
    {
      url: "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677668544/WhatsApp_Image_2023-03-01_at_07.59.12_rlfqgc.jpg",
      alt: "BOX CUSTODIA DIGITAL",
      link: "https://pki.boxcustodia.com/",
    },
    {
      url: "https://res.cloudinary.com/dc9ofeyv7/image/upload/v1677668544/WhatsApp_Image_2023-03-01_at_07.57.18_bbkjdy.jpg",
      alt: "FAMIQ",
      link: "https://www.famiq.com.ar/",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div className="carruselito" style={containerStyle}>
      <Slider className="Carrousel" {...settings}>
        {images.map((image, index) => (
          <div className="contenedor-foto" key={index}>
            <a href={image.link} target="_blank" rel="noreferrer">
              <img src={image.url} alt={image.alt} style={imgStyle} />
            </a>
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
