import {
  Box,
  Text,
  usePrefersReducedMotion,
  keyframes,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { AnimationWrapper } from "react-hover-animation";

export default function Logo(props) {
  const spin = keyframes`
    to { background-position: 200% center; }
  `;
  //   console.log(spin);
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : ` ${spin} 16s linear infinite`;

  return (
    <Box {...props}>
      <AnimationWrapper>
        <Text
          fontSize={["2xl", "4xl"]}
          fontWeight="extrabold"
          style={{ textFillColor: "#000" }}
          color="#000"
          animation={animation}
          bgClip="text"
          bgGradient={"linear(to-r, teal.500, green.100)"}
          // bgGradient={useColorModeValue(
          //   "linear(to-r, red.500, yellow.500)",
          //   "linear(to-r, teal.500, green.100)"
          // )}
          letterSpacing={["wide", "wider"]}
          backgroundSize="200% auto"
        >
          <Link href="/">{"[V]"}</Link>
        </Text>
      </AnimationWrapper>
    </Box>
  );
}
