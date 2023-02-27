import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import "./about.css";

function AboutUs() {
  return (
    <Box
      id="about-us"
      p={{ base: 4, md: 8 }}
      maxW={{ base: "100%", md: "80%" }}
      mx="auto"
    >
      <Box display={"flex"}>
      <Heading as="h1" size="xl" mb={{ base: 4, md: 8 }}>
        ¿Quiénes
      </Heading>
      <Heading as="h1" size="xl" mb={{ base: 4, md: 8 }} marginLeft={"1%"} color={"rgb(89, 109, 190)"}>
        somos?
      </Heading>
      </Box>
      <Text fontSize={{ base: "md", md: "lg" }}>
        Why do we use it? It is a long established fact that a reader will be
        distracted by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less normal
        distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing
        packages and web page editors now use Lorem Ipsum as their default model
        text, and a search for 'lorem ipsum' will uncover many web sites still
        in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose .injected humour and the
        {/* like).//Lorem copiado de internet */}
      </Text>
      <div className="aboutChicas">
        <a href="/aboutSabrina" class="about-link">
          Sabrina
        </a>
        <br />
        <a href="/aboutNahir" class="about-link">
          Nahir
        </a>
      </div>
    </Box>
  );
}

export default AboutUs;
