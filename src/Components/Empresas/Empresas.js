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
        <Box display={["grid", "grid", "flex", "flex"]}>
          <Heading
            as="h1"
            fontSize={["20px", "28px", "36px"]}
            mb={{ base: 6, md: 6 }}
            mt={["-33%", "5%"]}
            font-family="'Montserrat', sans-serif"
            textAlign={"center"}
            marginLeft={["-8%", "0%", "0%"]}
          >
            EMPRESAS QUE CONFÍAN EN
          </Heading>
          <Heading
            as="h1"
            mb={{ base: 7, md: 8 }}
            mt={["-18%", "5%"]}
            textAlign={"center"}
            marginLeft={["-8%", "1%"]}
            color={"#446b9c"}
            font-weight=" bold"
            fontSize={["20px", "28px", "36px"]}
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
        background="linear-gradient(135deg, #4b749c, #92dde8, #e9f8fa)"
        boxShadow="0 4px 6px rgba(0,0,0,0.1)"
        borderRadius="md"
      >
        <CarrouselEmpresas />
      </Box>
    </div>
  );
}

function CarrouselEmpresas() {
  const images = [
    {
      url: "https://res.cloudinary.com/dmuudt7dt/image/upload/v1678476045/Dise%C3%B1o_sin_t%C3%ADtulo_39_fnofcg.png",
      alt: "Delicious",
      link: "http://deliciouscafe.com.ar/?fbclid=IwAR2SqSw7mTLgYzYoXMAzA_0qyw2FcU-bK4pgn9Qx1wXrxCePuPxoB_AYXYQs",
    },
    {
      url: "https://res.cloudinary.com/dmuudt7dt/image/upload/v1678457859/Dise%C3%B1o_sin_t%C3%ADtulo_36_lenr68.png",
      alt: "ENVAPLAST",
      link: "https://www.envaplast.com.ar/,",
    },
    {
      url: "https://res.cloudinary.com/dmuudt7dt/image/upload/v1678476045/Dise%C3%B1o_sin_t%C3%ADtulo_37_twofxx.png",
      alt: "BOX CUSTODIA DIGITAL",
      link: "https://pki.boxcustodia.com/",
    },
    {
      url: "https://res.cloudinary.com/dmuudt7dt/image/upload/v1678476045/Dise%C3%B1o_sin_t%C3%ADtulo_38_fntzr7.png",
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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <a href={image.link} target="_blank" rel="noreferrer">
            <img className="carrousel-image" src={image.url} alt={image.alt} />
          </a>
        </div>
      ))}
    </Slider>
  );
}
