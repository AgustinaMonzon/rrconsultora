import { Box, Heading, Text, Image } from "@chakra-ui/react";

export default function Valores(){
    return(
        <Box
        id="about-us"
        p={{ base: 4, md: 8 }}
        maxW={{ base: "100%", md: "80%" }}
        mx="auto"
      >
        <Box display={"flex"}>
          <Heading as="h1" size="xl" mb={{ base: 4, md: 8 }}>
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
        <Box /* backgroundColor={"rgba(128, 128, 128, 0.171)"} */
               padding={"10px"}
               marginBottom={"13%"}
               display={"flex"}
               justifyContent={"space-between"}
               width={"100%"}
               >
                <Box display={"grid"} justifyContent={"center"} backgroundColor={'rgba(159, 138, 172, 0.281)'} 
                width={[ "23%", "23%"]} padding={["1%","2%"]} boxShadow={"xl"}>

                  <Image src="https://cdn-icons-png.flaticon.com/512/1244/1244701.png?w=740&t=st=1677694058~exp=1677694658~hmac=6584575706cdfbb4b84f70f777fa1bef5c3833a049c8d93e862e335e57d995af" 
                  width={"80%"} height={"90%"} display={"flex"} justifyContent={"center"} marginLeft={"10%"} />
                  <Text textAlign={"center"} justifyContent={"center"} display={"grid"}
                   fontWeight="bold" fontSize={["13px","10px", "15px"]} /* color={"rgb(89, 109, 190)"} */>Profesionalismo</Text>

                </Box>
            
                <Box display={"grid"} justifyContent={"center"} backgroundColor={'rgba(159, 138, 172, 0.281)'} width={[ "30%", "23%"]} padding={["1%","2%"]} boxShadow={"xl"}>
                  <Image src="https://cdn-icons-png.flaticon.com/512/1189/1189183.png?w=740&t=st=1677694438~exp=1677695038~hmac=f49a9f0654855cb7bd1893522eae04cabe1bf295d7a29bffb812a9b378c9e502"
                   width={"80%"} height={"90%"} display={"flex"} justifyContent={"center"} marginLeft={"10%"}/>

                  <Text textAlign={"center"} justifyContent={"center"} display={"grid"}
                  fontWeight="bold" fontSize={["13px","10px", "15px"]}>Empatía</Text>

                </Box>
                <Box display={"grid"} justifyContent={"center"} backgroundColor={'rgba(159, 138, 172, 0.281)'}
                 width={[ "30%", "23%"]} padding={["1%","2%"]} boxShadow={"xl"}>

                  <Image src="https://cdn-icons-png.flaticon.com/512/1246/1246329.png?w=740&t=st=1677694549~exp=1677695149~hmac=5b1cd652e7009addb89893383ec8db3d4b02cce9c77d063180e13f9ebb0c9215"
                   width={"80%"} height={"90%"} display={"flex"} justifyContent={"center"} marginLeft={"10%"}/>

                <Text textAlign={"center"} justifyContent={"center"} display={"grid"}
                fontWeight="bold" fontSize={["13px","10px", "15px"]}>Honestidad</Text>

                </Box>
                <Box display={"grid"} justifyContent={"center"} backgroundColor={'rgba(159, 138, 172, 0.281)'}
                 width={[ "30%", "23%"]} padding={["1%","2%"]} boxShadow={"xl"}>

                  <Image src="https://cdn-icons-png.flaticon.com/512/1244/1244554.png?w=740&t=st=1677694582~exp=1677695182~hmac=02bf4dfebe923ee12dfcd609a3e16839de0651506905fdda38f3744b994adbd1"
                   width={"80%"} height={"90%"} display={"flex"} justifyContent={"center"} marginLeft={"10%"}/>

                  <Text textAlign={"center"} justifyContent={"center"} display={"grid"}
                  fontWeight="bold" fontSize={["13px","10px", "15px"]}>Flexibilidad</Text>
                </Box>
               </Box>
        </Box>
 )

}