import { Box, Heading, Text, Image, Flex } from "@chakra-ui/react";
import "./Valores.css";
export default function Valores() {
  return (
    <Box
      className="valores"
      p={{ base: 0, md: 8 }}
      maxW={{ base: "100%", md: "80%" }}
      mx="auto"
    >
      <Box display={["grid", "grid", "flex"]}>
        <Heading
          as="h1"
          fontSize={["20px", "28px", "36px"]}
          mb={{ base: 6, md: 6 }}
          mt={["-25%", "0", "0%", "-5%"]}
          font-family="'Montserrat', sans-serif"
          textAlign={"center"}
          marginLeft={["-18%", "0%", "0%"]}
        >
          VALORES EN
        </Heading>
        <Heading
          as="h1"
          mb={{ base: 7, md: 8 }}
          mt={["-10%", "0", "0%", "-5%"]}
          textAlign={"center"}
          marginLeft={["-16%", "1%"]}
          color={"#446b9c"}
          font-weight=" bold"
          fontSize={["20px", "28px", "36px"]}
          font-family="'Montserrat', sans-serif"
        >
          RR CONSULTORÍA
        </Heading>
      </Box>
      <Flex
        padding={"10px"}
        marginBottom={"13%"}
        marginTop={["0%", "0%"]}
        display={["grid", "grid", "flex"]}
        justifyContent={["center", "space-between"]}
        width={"105%"}
        h={["100%", "85%"]}
        marginLeft={["-8%", "0%"]}
      >
        <Box
          className="card"
          display={"grid"}
          justifyContent={"center"}
          backgroundColor={"rgba(139,200,232,255)"}
          width={["100%", "23%"]}
          h={["100%", "100%"]}
          padding={["1%", "2%"]}
          boxShadow={"xl"}
          borderWidth={["2px", "0"]}
          borderColor={"#4b749c"}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1244/1244701.png?w=740&t=st=1677694058~exp=1677694658~hmac=6584575706cdfbb4b84f70f777fa1bef5c3833a049c8d93e862e335e57d995af"
            width={["27%", "80%"]}
            height={["95%", "90%"]}
            display={"flex"}
            justifyContent={"center"}
            marginLeft={["37%", "10%"]}
          />
          <Text
            textAlign={"center"}
            justifyContent={"center"}
            display={"grid"}
            fontWeight="bold"
            fontSize={["12px", "10px", "15px"]}
            color="black"
            w={["100%", "100%"]}
          >
            PROFESIONALISMO
          </Text>
          <Box
            color="black"
            marginTop={[1, 2]}
            w={["100%", "100%"]}
            h={"100%"}
            fontSize={["11px", "10px", "15px"]} /* backgroundColor={"green"} */
          >
            Creemos que el profesionalismo es fundamental para brindar el mejor
            servicio a nuestros clientes. Nos esforzamos por mantener altos
            estándares en todo lo que hacemos, desde nuestra comunicación hasta
            la calidad de nuestros informes y soluciones. Nuestro enfoque
            riguroso y profesional nos permite ofrecer resultados confiables y
            efectivos.
          </Box>
        </Box>

        <Box
          display={"grid"}
          justifyContent={"center"}
          backgroundColor={"rgba(139,200,232,255)"}
          width={["100%", "23%"]}
          h={["100%", "100%"]}
          padding={["1%", "2%"]}
          boxShadow={"xl"}
          borderWidth={["2px", "0"]}
          borderColor={"#4b749c"}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1189/1189183.png?w=740&t=st=1677694438~exp=1677695038~hmac=f49a9f0654855cb7bd1893522eae04cabe1bf295d7a29bffb812a9b378c9e502"
            width={["27%", "80%"]}
            height={["95%", "90%"]}
            display={"flex"}
            justifyContent={"center"}
            marginLeft={["37%", "10%"]}
          />

          <Text
            textAlign={"center"}
            justifyContent={"center"}
            display={"grid"}
            fontWeight="bold"
            fontSize={["12px", "10px", "15px"]}
            color="black"
            marginTop={[0, 2]}
          >
            EMPATÍA
          </Text>
          <Box
            color="black"
            marginTop={[1, 3]}
            fontSize={["11px", "10px", "15px"]}
          >
            En RR Consultoría valoramos la empatía porque entendemos que cada
            cliente es único y tiene necesidades y circunstancias únicas.
            Nuestros consultores están comprometidos en escuchar activamente a
            nuestros clientes y comprender sus desafíos, metas y objetivos. Solo
            entonces podemos ofrecer soluciones personalizadas que se adapten a
            sus necesidades específicas.
          </Box>
        </Box>
        <Box
          display={"grid"}
          justifyContent={"center"}
          backgroundColor={"rgba(139,200,232,255)"}
          width={["100%", "23%"]}
          h={["100%", "100%"]}
          padding={["1%", "2%"]}
          boxShadow={"xl"}
          borderWidth={["2px", "0"]}
          borderColor={"#4b749c"}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1246/1246329.png?w=740&t=st=1677694549~exp=1677695149~hmac=5b1cd652e7009addb89893383ec8db3d4b02cce9c77d063180e13f9ebb0c9215"
            width={["27%", "80%"]}
            height={["95%", "90%"]}
            display={"flex"}
            justifyContent={"center"}
            marginLeft={["37%", "10%"]}
          />

          <Text
            textAlign={"center"}
            justifyContent={"center"}
            display={"grid"}
            fontWeight="bold"
            color="black"
            fontSize={["12px", "10px", "15px"]}
            marginTop={[0, -5]}
          >
            HONESTIDAD
          </Text>
          <Box
            color="black"
            marginTop={[1, -5]}
            fontSize={["11px", "10px", "15px"]}
          >
            La honestidad es un valor clave en RR Consultoría. Nos comprometemos
            a ser honestos y transparentes con nuestros clientes en todo
            momento, incluso si eso significa decir cosas difíciles de escuchar.
            Creemos que la honestidad y la transparencia son esenciales para
            establecer una relación de confianza a largo plazo con nuestros
            clientes.
          </Box>
        </Box>
        <Box
          display={"grid"}
          justifyContent={"center"}
          backgroundColor={"rgba(139,200,232,255)"}
          width={["100%", "23%"]}
          h={["100%", "100%"]}
          padding={["1%", "2%"]}
          boxShadow={"xl"}
          borderWidth={["2px", "0"]}
          borderColor={"#4b749c"}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/1244/1244554.png?w=740&t=st=1677694582~exp=1677695182~hmac=02bf4dfebe923ee12dfcd609a3e16839de0651506905fdda38f3744b994adbd1"
            width={["27%", "80%"]}
            height={["95%", "90%"]}
            display={"flex"}
            justifyContent={"center"}
            marginLeft={["37%", "10%"]}
          />

          <Text
            textAlign={"center"}
            justifyContent={"center"}
            display={"grid"}
            fontWeight="bold"
            fontSize={["12px", "10px", "15px"]}
            color="black"
            marginTop={[0, 2]}
          >
            FLEXIBILIDAD
          </Text>
          <Box
            color="black"
            marginTop={[1, 2]}
            fontSize={["11px", "10px", "15px"]}
          >
            Reconocemos que los desafíos de los recursos humanos pueden surgir
            en cualquier momento y que nuestras soluciones deben ser flexibles
            para adaptarse a las necesidades cambiantes de nuestros clientes.
            Valoramos la flexibilidad porque nos permite responder rápidamente a
            las necesidades de nuestros clientes y ofrecer soluciones
            innovadoras y adaptadas a sus necesidades.
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
