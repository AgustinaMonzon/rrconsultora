import { Box, Heading } from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Carrousel from "./Carrousel";
import AboutUs from "../AboutUs/AboutUs";
import Slider from "react-slick";
import "./Home.css";
function Home() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <NavBar />
      <Box flexGrow={1}>
        <Box mt={20}>
          <Carrousel />
        </Box>
        <Box mb={10}>
          <AboutUs />
        </Box>

        <Box display={"flex"} marginLeft={"13%"}>
          <Heading as="h2" size="xl" mb={{ base: 8, md: 12 }}>
            Valores en
          </Heading>
          <Heading
            as="h2"
            size="xl"
            mb={{ base: 8, md: 12 }}
            marginLeft={"1%"}
            color={"rgb(89, 109, 190)"}
          >
            RR Consultoría
          </Heading>

          <Box
            as="ul"
            listStyleType="none"
            display="flex"
            justifyContent="center"
            alignItems="center"
            marginTop="50px"
            marginBottom="10px"
          >
            {" "}
            <Box className="LI">
              <ul
                className="LI"
                style={{
                  listStyleType: "none",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "50px",
                  marginBottom: "10px",
                }}
              >
                <li className="list-item" style={{ marginRight: "20px" }}>
                  Profesionalismo
                </li>
                <li className="list-item" style={{ marginRight: "20px" }}>
                  Empatía
                </li>
                <li className="list-item" style={{ marginRight: "20px" }}>
                  Honestidad
                </li>
                <li className="list-item">Flexibilidad</li>
              </ul>
            </Box>
          </Box>
        </Box>

        <Box bg="blue.100" py={6}>
          <Box maxW="2xl" mx="auto" px={6}>
            <Heading
              as="h2"
              mb={6}
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              color={"rgb(89, 109, 190)"}
            >
              Clientes
            </Heading>
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
      url: "https://png.pngtree.com/png-vector/20210818/ourlarge/pngtree-thank-you-simple-phrase-png-image_3806169.jpg",
      alt: "Imagen 1",
    },
    {
      url: "https://i.pinimg.com/564x/4d/f6/48/4df648d6b51c9fcdebdaa3461888b266.jpg",
      alt: "Imagen 2",
    },
    {
      url: "https://png.pngtree.com/png-vector/20210818/ourlarge/pngtree-thank-you-simple-phrase-png-image_3806169.jpg",
      alt: "Imagen 3",
    },
    {
      url: "https://i.pinimg.com/564x/f0/73/08/f073080da871b186f7995784a4468a14.jpg",
      alt: "Imagen 4",
    },
    {
      url: "https://i.pinimg.com/564x/47/28/5e/47285e52f2b9649e53f98045fdad4453.jpg",
      alt: "Imagen 5",
    },
    {
      url: "https://i.pinimg.com/564x/63/aa/09/63aa09e5114c420c432ec2022ebdd284.jpg",
      alt: "Imagen 6",
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
            <img src={image.url} alt={image.alt} style={imgStyle} />
            <div className="caption">{image.caption}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Home;
