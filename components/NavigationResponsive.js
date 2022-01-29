import React from "react";
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  IconButton,
  useColorMode,
  useColorValue,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import Logo from "./Logo";

import { HiMenu, HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        // w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <AiOutlineClose color={useColorModeValue("black", "white")} size={"1.45em"} />
);

const MenuIcon = () => (
  <HiMenu color={useColorModeValue("black", "white")} size={"1.45em"} />
);

const MenuIconSmall = () => <HiMenuAlt4 />;

// const MenuIcon = () => (
//   <svg
//     width="24px"
//     viewBox="0 0 20 20"
//     xmlns="http://www.w3.org/2000/svg"
//     fill={useColorModeValue("black", "white")}
//   >
//     <title>Menu</title>
//     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//   </svg>
// );

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box
      display={{ base: "block", md: "block", lg: "none" }}
      zIndex={2}
      onClick={toggle}
    >
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to} style={{ textDecoration: "none" }} zIndex={2}>
      <Text
        display="block"
        zIndex={2}
        {...rest}
        color={useColorModeValue("black", "white")}
        size={["lg", "xl"]}
        mx="10px"
      >
        {children}
      </Text>
    </Link>
  );
};

// const MenuItem = ({children, to = "/"})

const MenuLinks = ({ isOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: "gray.600",
    dark: "yellow.600",
  };
  const iconType = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };
  return (
    <Box
      display={{
        base: isOpen ? "block" : "none",
        md: isOpen ? "block" : "none",
        lg: "block",
      }}
      flexBasis={{ base: "100%", md: "100%", lg: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "center", "flex-end", "flex-end"]}
        direction={["column", "column", "column", "row"]}
        pt={[4, 4, 0, 0]}
        mt={[4, 4, 4, 0]}
      >
        <MenuItem to="/blog">Blogs</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem display={{ md: "flex", lg: "flex" }} to="#">
          <IconButton
            aria-label="icon"
            icon={iconType[colorMode]}
            size="lg"
            isRound
            variant="ghost"
            fontWeight="bold"
            color={iconColor[colorMode]}
            onClick={toggleColorMode}
          />
        </MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={[
        "space-between",
        "space-between",
        "space-between",
        "space-around",
      ]}
      wrap="wrap"
      w="100%"
      //   mb={8}
      py={4}
      bg={["primary.500", "primary.500", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
