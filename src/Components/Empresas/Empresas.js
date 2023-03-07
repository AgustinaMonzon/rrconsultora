import { Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import Slider from "react-slick";
import "./Empresas.css";

export default function Empresas() {
  return (
    <div className="Empresas">
      <Box
        className="Encabezado"
        p={{ base: 4, md: 8 }}
        maxW={{ base: "100%", md: "80%" }}
        mx="auto"
        bg={useColorModeValue("white", "gray.800")}
        marginBottom={"-1%"}
        marginTop={"-7%"}
      >
        <Box display={"flex"}>
          <Heading
            as="h1"
            size="xl"
            mb={{ base: 4, md: 8 }}
            mr={{ md: "2%" }}
            font-family="'Montserrat', sans-serif"
          >
            EMPRESAS QUE CONFÍAN EN
          </Heading>
          <Heading
            marginLeft={"-1%"}
            as="h1"
            size="xl"
            mb={{ base: 4, md: 8 }}
            color={"#446b9c"}
            font-family="'Montserrat', sans-serif"
          >
            NOSOTRAS
          </Heading>
        </Box>
      </Box>

      <Box
        className="Carrusel"
        p={{ base: 4, md: 8 }}
        w="100%"
        h="200px"
        mx="auto"
        backgroundColor={"#c0f0f8"}
        marginBottom={"8%"}
        background="linear-gradient(135deg, #92dde8 0%, #2b2c64 100%)"
        boxShadow="0 4px 6px rgba(0,0,0,0.1)"
        borderRadius="md"
      >
        <CarrouselEmpresas />
      </Box>
    </div>
  );
}

function CarrouselEmpresas() {
  const imgStyle = {
    margin: "10px 20px",
    maxHeight: "150px",
    maxWidth: "350px",
    marginRight: "80px",
  };

  const containerStyle = {
    maxWidth: "250%",
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
