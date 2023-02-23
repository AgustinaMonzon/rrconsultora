import { Box, Heading, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box p={4}>
      <Text fontSize="lg">El único sitio dónde</Text>
      <Heading as="h1" size="xl" mb={4}>
        EL ÉXITO
      </Heading>
      <Text fontSize="lg">
        aparece antes que el trabajo, es en el diccionario.
      </Text>
      <Text fontSize="lg">Donald M. Kendall.</Text>
    </Box>
  );
}

export default Home;
