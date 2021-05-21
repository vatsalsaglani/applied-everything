import React from "react";
import {
  Box,
  Container,
  Text,
  IconButton,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const textColor = {
    light: "black",
    dark: "white",
  };
  const iconColor = {
    light: "black",
    dark: "white",
  };
  const boxShadow = {
    dark: "inset 18px 18px 29px #100e25,inset -18px -18px 29px #161233",
    light: "inset 15px 15px 30px #e6e6e6,inset -15px -15px 30px #ffffff;",
  };

  return (
    <Container
      minWidth="100%"
      minHeight="10vh"
      display="flex"
      justifyContent="space-around"
      alignItems="space-around"
    >
      <Container minWidth="100%">
        <Container minWidth="100%">
          <Text
            fontWeight="bold"
            textAlign="justify"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            // fontSize="2xl"
            color={textColor[colorMode]}
            mt="35px"
            ml="25px"
            mb="5px"
          >
            {"<AppliedEverything />"}
          </Text>
          <Text
            ml="25px"
            fontSize="md"
            color="cyan.900"
            fontStyle="italic"
            mb="25px"
          >
            by:{" "}
            <ChakraLink
              href="https://twitter.com/saglanivatsal"
              isExternal
              fontStyle="italic"
              color="cyan.900"
              letterSpacing="wide"
            >
              @saglanivatsal
            </ChakraLink>
          </Text>
        </Container>
      </Container>
      <Container
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        flexDirection="row"
      >
        <Container
          display="flex"
          flexDirection="column-reverse"
          alignItems="flex-end"
          justifyContent="center"
        >
          <IconButton
            aria-label="icon"
            icon={<SunIcon />}
            size="lg"
            mr="25px"
            mt="35px"
            mb="20px"
            isRound
            variant="ghost"
            fontWeight="bold"
            color={iconColor[colorMode]}
            onClick={toggleColorMode}
          />
        </Container>
      </Container>
    </Container>
  );
};

export default Navigation;
