import { useState } from "react";
import { Link } from "react-router-dom";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  IconButton,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import logo from "./logoRRC.png";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [display, changeDisplay] = useState("none");

  return (
    <Flex>
      <Flex
        position="fixed"
        align="center"
        zIndex={1}
        w={"100%"}
        borderTop="1px solid gray"
        borderBottom="1px solid gray"
        padding="0px"
        backgroundColor={"#4b749c"}
        justifyContent={"center"}
      >
        {/* Desktop */}
        <Link to="/">
          <Image
            src={logo}
            width={["50px", "70px"]}
            marginLeft={[
              "0%",
              "-5%",
              "15%",
              "150%",
              "0%",
              "0%",
              "0%",
              "0%",
              "0%",
              "75%",
            ]}
            backgroundColor={"white"}
            borderRadius={"full"}
            justifyContent={"center"}
          ></Image>
        </Link>

        <Flex
          display={["none", "none", "flex", "flex"]}
          marginLeft={["0%", "0%", "2%", "10%", "8%", "8%"]}
          justifyContent={"center"}
        >
          <Link to="/" passHref>
            <Button
              as="a"
              variant="ghost"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="Home"
              my={5}
              w="100%"
              fontSize={["11px", "11px", "11px", "13px"]}
            >
              HOME
            </Button>
          </Link>
          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            offset={-70}
            passHref
          >
            <Link to="/#about-us" passHref>
              <Button
                as="a"
                variant="ghost"
                color={"white"}
                _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
                aria-label="About"
                my={5}
                w="100%"
                fontSize={["11px", "11px", "11px", "13px"]}
              >
                QUIÉNES SOMOS
              </Button>
            </Link>
          </ScrollLink>

          <Link to="/soyEmpresa" passHref>
            <Button
              as="a"
              variant="ghost"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              fontSize={["11px","11px","11px","13px"]}
            >
              SOY EMPRESA
            </Button>
          </Link>
          <Link to="/soyCandidato" passHref>
            <Button
              as="a"
              variant="ghost"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              fontSize={["11px","11px","11px","13px"]}
            >
              SOY CANDIDATO
            </Button>
          </Link>
          <Link to="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              fontSize={["11px","11px","11px","13px"]}
            >
              CONTACTO
            </Button>
          </Link>
          <a href="https://docs.google.com/forms/d/1lq_EhQqFZnD4eeghbt_Z6Z0ejnixuvgcbBNWL1jlYuI/edit"  target="_blank"
            rel="noopener noreferrer">
            <Button
              as="a"
              color={"white"}
              colorScheme={"cyan"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="Contact"
              my={5}
              w={["80%","80%","80%","100%"]}
              fontSize={["11px","11px","11px","13px"]}
              marginLeft={["0%","0%","15%","10%","67%"]}
            >
              CARGÁ TU CV
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/company/r-r-consultoria/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              m="5px"
              marginTop={"42%"}
              colorScheme="linkedin"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
               marginLeft={["0%","0%","30%","70%", "200%"]} 
              icon={<FaLinkedinIn />}
            />
          </a>
          <a
            href="https://www.instagram.com/rrconsultoria_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              m="5px"
              marginTop={"42%"}
              colorScheme="pink"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
               marginLeft={["0%",,"50%","90%","218%", "215%"]}  
              icon={<FaInstagram />}
            />
          </a>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="xs"
          marginLeft={["20px", "45px", "280px"]}
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
          color="black"
        />
        <Switch color="black" isChecked={isDark} marginLeft={["0%","4%","3%","5%","8%","7%"]} onChange={toggleColorMode} />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w="100vw"
        display={display}
        bgColor="gray.50"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end" backgroundColor={"black"}>
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            justifyContent={"center"}
            marginRight={"10%"}
            icon={< CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center" backgroundColor={"black"}>
          <Link to="/" passHref>
            <Button
              as="a"
              variant="ghost"
              _hover={{ bg: "rgb(89, 109, 190)" }}
              aria-label="Home"
              my={5}
              w="100%"
              color={"white"}
            >
              Home
            </Button>
          </Link>

          <Link to="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              _hover={{ bg: "rgb(89, 109, 190)" }}
              aria-label="About"
              my={5}
              w="100%"
              color={"white"}
              href="#about-us"
            >
              Quienes Somos
            </Button>
          </Link>

          {/* <Link to="/services" passHref>
            <Button
              as="a"
              variant="ghost"
              _hover={{ bg: "rgb(89, 109, 190)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              color={"white"}
            >
              Servicios
            </Button>
          </Link> */}
          <Link to="/soyEmpresa" passHref>
            <Button
              as="a"
              variant="ghost"
              _hover={{ bg: "rgb(89, 109, 190)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              color={"white"}
            >
              Soy Empresa
            </Button>
          </Link>
          <Link to="/soyCandidato" passHref>
            <Button
              as="a"
              variant="ghost"
              _hover={{ bg: "rgb(89, 109, 190)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              color={"white"}
            >
              Soy Candidato
            </Button>
          </Link>
          <Link to="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              _hover={{ bg: "rgb(89, 109, 190)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              color={"white"}
            >
              Contacto
            </Button>
          </Link>
          <a href="https://docs.google.com/forms/d/1lq_EhQqFZnD4eeghbt_Z6Z0ejnixuvgcbBNWL1jlYuI/edit"  target="_blank"
            rel="noopener noreferrer">
            <Button
              as="a"
              colorScheme={"cyan"}
              _hover={{ bg: "rgb(89, 109, 190)" }}
              aria-label="Contact"
              my={5}
              w="100%"
              color={"white"}
            >
              Cargá Tu CV
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/company/r-r-consultoria/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              m="5px"
              marginTop={"40%"}
              colorScheme="linkedin"
              _hover={{ bg: "rgb(89, 109, 190)" }}
              icon={<FaLinkedinIn />}
            />
          </a>
          <a
            href="https://www.instagram.com/rrconsultoria_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              m="5px"
              marginTop={"40%"}
              colorScheme="pink"
              _hover={{ bg: "pink" }}
              icon={<FaInstagram />}
            />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}
