import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Button,
  useColorMode,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { Container, Text } from "@chakra-ui/react";
import { getAllFilesFrontMatter } from "../library/mdx";
import { SearchIcon } from "@chakra-ui/icons";

import ListBlogs from "../components/ListBlogs";

export default function Home({ posts }) {
  const [searchText, setSearchText] = useState("");

  const { colorMode } = useColorMode();
  // console.log(colorMode);
  // console.log(posts);

  const filteredPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchText.toLowerCase())
    );

  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <div>
      <Head>
        <title>Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container minWidth="55%">
        <Navigation />
        <Container
          mt="30px"
          display="flex"
          flexDirection="column"
          alignItems="space-around"
          minWidth="100%"
        >
          <Container minWidth="100%">
            <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by title"
                placeholder="Search"
                color={textColor[colorMode]}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>
            {searchText.length > 0 ? null : (
              <Text
                mt="29px"
                ml="2px"
                fontWeight="bold"
                textAlign="left"
                fontSize="xl"
                color={textColor[colorMode]}
              >
                Latest Blogs
              </Text>
            )}
          </Container>
          <Container
            display="flex"
            flexDirection="column"
            alignItems="space-between"
            minWidth="100%"
          >
            {!filteredPosts.length && (
              <Text mt="5px" color={textColor[colorMode]}>
                No posts found 🥲
              </Text>
            )}
            {filteredPosts.map((frontMatter) => (
              <ListBlogs key={frontMatter.title} {...frontMatter} />
            ))}
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}
