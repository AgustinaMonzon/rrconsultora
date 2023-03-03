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
        // shadow={"lg"}
        // boxShadow={"0 2px 2px rgb(157, 210, 245)"}
        borderBottom="1px solid gray"
        padding="0px"
        backgroundColor={"#4b749c"}
        // backgroundColor={"rgba(255, 255, 255, 0.8);"}
      >
        {/* Desktop */}
        <Link to="/">
          <Image
            src={logo}
            width={["50px", "70px"]}
            marginLeft={["20%", "10%"]}
          ></Image>
        </Link>

        <Flex
          display={["none", "none", "flex", "flex"]}
          marginLeft={["17%", "17%", "17%", "35%", "50%", "58%"]}
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
            >
              Home
            </Button>
          </Link>

          <ScrollLink
            to="about-us"
            smooth={true}
            duration={500}
            offset={-70}
            passHref
          >
            <Button
              as="a"
              variant="ghost"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="About"
              my={5}
              w="100%"
            >
              Quienes somos
            </Button>
          </ScrollLink>

          <Link to="/services" passHref>
            <Button
              as="a"
              variant="ghost"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Soy Empresa
            </Button>
          </Link>
          <Link to="/services" passHref>
            <Button
              as="a"
              variant="ghost"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Soy Candidato
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
            >
              Contacto
            </Button>
          </Link>
          <a
            href="https://www.linkedin.com/company/r-r-consultoria/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              m="5px"
              marginTop={"40%"}
              colorScheme="linkedin"
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
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
              color={"white"}
              _hover={{ bg: "rgba(183, 221, 246, 0.712)" }}
              icon={<FaInstagram />}
            />
          </a>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          marginLeft={["12px", "35px", "280px"]}
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
          color="black"
        />
        <Switch color="black" isChecked={isDark} onChange={toggleColorMode} />
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
            icon={<CloseIcon />}
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
              Quienes somos
            </Button>
          </Link>

          <Link to="/services" passHref>
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
          <a
            href="https://www.linkedin.com/in/melina-veyrat-durbex-b66b3b227/"
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
            href="https://github.com/meliveyrat1"
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
