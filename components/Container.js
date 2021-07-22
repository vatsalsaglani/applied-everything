import React from "react";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";

// import DarkModeSwitch from '../components/DarkModeSwitch'

const Container = ({ children }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: "whiteAlpha.400",
    dark: "#1A212C",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <Flex
        // as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        // px={[0, 4, 4]}
        // mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
};

export default Container;
