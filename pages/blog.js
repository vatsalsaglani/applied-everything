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

export default function Blog({ posts }) {
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
    <Box minWidth="100%">
      <Box minWidth="100%">
        <Box>
          <Container bg={useColorModeValue("#fff", "gray.900")} minWidth="70%">
            <Navigation />
          </Container>
        </Box>
        {/* <Box></Box> */}
      </Box>
      <Container minWidth="65%">
        <ArticlesHome posts={posts} showSearch={true} />
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter("blog");
  return { props: { posts } };
}
