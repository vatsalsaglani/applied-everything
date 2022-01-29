import Head from "next/head";
import ArticlesHome from "../components/articles";

import { getAllFilesFrontMatter } from "../library/mdx";
import {
  Container,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import Hero from "../components/HomeHero";

export default function Home({ posts }) {
  const { colorMode } = useColorMode();

  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const background = {
    light: "white",
    dark: "#1A212C",
  };
  return (
    <Box minWidth="100%" zIndex={2}>
      <Head>
        <title>Home | Vatsal Saglani</title>
      </Head>
      <Box minHeight="100vh" minWidth="100%" zIndex={2}>
        <Box bg={useColorModeValue("#fff", "gray.900")} zIndex={2}>
          <Container minWidth="70%" zIndex={2}>
            <Navigation />
          </Container>
        </Box>
        <Container
          my={"10px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"stretch"}
          minHeight={"85vh"}
          minWidth={"70%"}
          zIndex={1}
        >
          <Hero />
        </Container>
        {/* <Box></Box> */}
      </Box>
      <Container>
        <Text color={textColor[colorMode]} fontSize="xl">
          Latest Blogs
        </Text>
        <ArticlesHome posts={posts} />
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter("blog");
  posts = posts.slice(0, 10);
  return { props: { posts } };
}
