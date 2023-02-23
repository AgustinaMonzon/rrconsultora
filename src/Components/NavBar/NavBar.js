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
        shadow={"lg"}
        borderBottom="1px solid gray"
        padding="0px"
        /* backgroundColor={'rgb(124, 199, 249)'}  */
        /* backgroundColor={"rgb(157, 210, 245);"} */
      >
        {/* Desktop */}
        {/* <Image src={imgLogo} width={["60px","100px"]} marginLeft={"2%"}></Image> */}
        <Text>Logo</Text>
        <Flex
          display={["none", "none", "flex", "flex"]}
          marginLeft={["24%", "24%", "24%", "41%", "53%", "60%"]}
        >
          <Link to="/" passHref>
            <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
              Home
            </Button>
          </Link>

          <Link to="/about" passHref>
            <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
              Quienes somos
            </Button>
          </Link>

          <Link to="/services" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
              Servicios
            </Button>
          </Link>
          <Link to="/contact" passHref>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
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
              colorScheme="gray"
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
              colorScheme="gray"
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
        />
        <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
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
              aria-label="About"
              my={5}
              w="100%"
              color={"white"}
            >
              Quienes somos
            </Button>
          </Link>

          <Link to="/services" passHref>
            <Button
              as="a"
              variant="ghost"
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
              colorScheme="gray"
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
              colorScheme="gray"
              icon={<FaInstagram />}
            />
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
}
