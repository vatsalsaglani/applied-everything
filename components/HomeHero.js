import {
  Container,
  Box,
  Text,
  Button,
  usePrefersReducedMotion,
  keyframes,
  useColorModeValue,
  Link,
  Center,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

import {
  AiFillMediumCircle,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Name = () => {
  const spin = keyframes`
    to { background-position: 200% center; }
  `;
  //   console.log(spin);
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : ` ${spin} 15s linear infinite`;

  return (
    <Box mb={2}>
      <Text
        fontWeight={"bold"}
        letterSpacing={["tight", "medium", "wide", "wider"]}
        fontSize={["2xl", "3xl", "4xl"]}
        textAlign="center"
        animation={animation}
        bgClip="text"
        bgGradient={"linear(to-l, green.500, teal.500, green.200)"}
        backgroundSize="200% auto"
      >
        Hi, I am Vatsal Saglani
      </Text>
    </Box>
  );
};

const InfoText = () => {
  return (
    <Box mb={2}>
      <Text
        fontSize={["sm", "lg"]}
        textAlign="center"
        color={useColorModeValue("gray.900", "white")}
      >
        A Data Scientist working on real-world NLP and Computer Vision problems.
        An enthusiast of sorts for all web technologies related to ReactJS.
        Currently, on a personal quest to learn Rust and Go.
      </Text>
    </Box>
  );
};

const AboutHolder = () => (
  <Box
    mb={2}
    p={7}
    display={"flex"}
    flexDirection={"column"}
    justifyContent={"space-around"}
    alignItems={"center"}
  >
    <InfoText />

    <OutIcons />
  </Box>
);
const OutIcons = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="stretch"
      p={1}
      my={6}
    >
      <IconButton
        aria-label="icon"
        icon={<AiFillMediumCircle />}
        size="md"
        color={useColorModeValue("black", "whiteAlpha.900")}
        onClick={() => {
          window.open("https://thevatsalsaglani.medium.com", "_blank");
        }}
        variant="solid"
        fontSize={["lg", "xl"]}
        border={"2px solid gray"}
        fontWeight="bold"
        isRound
      />
      <IconButton
        aria-label="icon"
        icon={<AiFillTwitterCircle />}
        size="md"
        color={useColorModeValue("black", "whiteAlpha.900")}
        fontWeight="bold"
        variant="solid"
        fontSize={["lg", "xl"]}
        isRound
        border={"2px solid gray"}
        onClick={() => {
          window.open("https://twitter.com/@saglanivatsal", "_blank");
        }}
        ml={2.5}
      />
      <IconButton
        aria-label="icon"
        variant="solid"
        icon={<AiFillLinkedin />}
        size="md"
        color={useColorModeValue("black", "whiteAlpha.900")}
        fontSize={["lg", "xl"]}
        fontWeight="bold"
        onClick={() => {
          window.open("https://linkedin.com/in/vatsalsaglani", "_blank");
        }}
        isRound
        ml={2.5}
        border={"2px solid gray"}
      />
    </Box>
  );
};

const Hero = () => {
  return (
    <Box>
      <Center zIndex={1}>
        <Box
          zIndex={1}
          // maxWidth={["100vw", "35vw"]}
          width={["100vw", "35vw"]}
          // backgroundColor={useColorModeValue("gray.100", "whiteAlpha.100")}
          borderRadius={"15px"}
          p={4}
        >
          <Name />
          <AboutHolder />
        </Box>
      </Center>
    </Box>
  );
};

export default Hero;
