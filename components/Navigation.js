import React from "react";
import {
  Box,
  Container,
  Text,
  IconButton,
  useColorMode,
  HStack,
  Link,
  useColorModeValue,
  MenuItem,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { AnimationWrapper } from "react-hover-animation";
import NavBar from "../components/NavigationResponsive";

// import Link from "next/link";

const NavLink = ({ title, href, textcolor }) => (
  <Link
    // px={2}
    // py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
    color={textcolor}
    zIndex={2}
  >
    {title}
  </Link>
);

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = {
    light: "black",
    dark: "white",
  };
  const iconColor = {
    light: "gray.600",
    dark: "yellow.600",
  };
  const boxShadow = {
    dark: "inset 18px 18px 29px #100e25,inset -18px -18px 29px #161233",
    light: "inset 15px 15px 30px #e6e6e6,inset -15px -15px 30px #ffffff;",
  };

  const iconType = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <Container
      minWidth="100%"
      //   minHeight="10vh"
      display="flex"
      justifyContent={["center", "space-around"]}
      alignItems="center"
      zIndex={2}
    >
      <NavBar />
    </Container>
  );
};

export default Navigation;
