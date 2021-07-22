import React from "react";
import Head from "next/head";
import { parseISO, format } from "date-fns";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  IconButton,
  Container as Cont,
  SimpleGrid,
  Box,
  Divider,
  Center,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { SunIcon, MoonIcon, ArrowBackIcon } from "@chakra-ui/icons";

import router from "next/router";

import Container from "../components/Container";
import Navigation from "../components/Navigation";

import { ListTags } from "../components/ListBlogs";

import { NextSeo } from "next-seo";

import { AnimationWrapper } from "react-hover-animation";

export default function BlogLayout({ children, frontMatter }) {
  const { colorMode } = useColorMode();
  // console.log("Matter: ", frontMatter);
  //   const router = useRouter()
  const goBack = () => {
    router.push("/");
  };
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const iconColor = {
    light: "black",
    dark: "white",
  };

  const dividerColor = {
    light: "teal",
    dark: "whiteAlpha.400",
  };
  const boxShadow = {
    dark: "inset 18px 18px 29px #100e25,inset -18px -18px 29px #161233",
    light: "inset 15px 15px 30px #e6e6e6,inset -15px -15px 30px #ffffff;",
  };
  const router = useRouter();
  const slug = router.asPath.replace("/blog/", "");
  //   console.log("Slug: ", slug);
  return (
    <Container>
      <Head>
        <title>{frontMatter.title} - Vatsal Saglani</title>
      </Head>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        twitter={{
          handle: "@saglanivatsal",
          cardType: "summary_large",
        }}
      />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
        px={2}
      >
        <Navigation />
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <AnimationWrapper>
              <IconButton
                // aria-label="Toggle dark mode"
                icon={<ArrowBackIcon />}
                onClick={goBack}
                color={iconColor[colorMode]}
                //   mr={2}
                variant="ghost"
                size="lg"
                mb={2}
                isRound
              />
            </AnimationWrapper>
            <Heading letterSpacing="tight" mb={2} as="h1" size="xl">
              {frontMatter.title}
            </Heading>
          </Box>

          <Container>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Container>

          <Container>
            <Center>
              <Image
                borderRadius="sm"
                my="19px"
                objectFit="cover"
                src={frontMatter.cover_image}
              />
            </Center>
          </Container>

          <Flex
            justify="space-between"
            align={["initial", "center"]}
            direction={["column", "row"]}
            mt={2}
            w="100%"
            mb={10}
          ></Flex>
        </Flex>
        {children}
        <Divider
          variant="dashed"
          colorScheme={dividerColor[colorMode]}
          mt="20px"
        />
        <Box display="block" minWidth="100%">
          <SimpleGrid
            columns={5}
            spacingX={1}
            spacingY={1}
            mt="9px"
            mb="10px"
            minWidth="100%"
            overflow="visible"
          >
            <ListTags tags={frontMatter.tags} />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
}
