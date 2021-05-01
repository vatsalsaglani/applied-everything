import React from "react";
import Link from "next/link";
import {
  useColorMode,
  Heading,
  Container,
  Box,
  Tag,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import { parseISO, format } from "date-fns";

export const ListTags = ({ tags }) => {
  // console.log("Tags: ", tags);
  const tagList = tags.split(", ");

  return tagList.map((value, index) => {
    return (
      <Tag
        variant="solid"
        rounded="lg"
        fontWeight="bold"
        textAlign="center"
        fontSize="sm"
        color="whiteAlpha.900"
        backgroundColor="facebook.500"
        key={index}
      >
        {value}
      </Tag>
    );
  });
};

const ListBlogs = ({ title, tags, summary, slug, reading_time }) => {
  const { colorMode } = useColorMode();
  // const listTags = tags.split(", ");
  // console.log("Tags -- ", listTags)
  const textColor = {
    light: "gray.700",
    dark: "gray.400",
  };
  const iconColor = {
    light: "black",
    dark: "white",
  };
  const borderColor = {
    dark: "white",
    light: "black",
  };

  return (
    // <NextLink href={`/blog/${slug}`} passHref>

    <Container
      mt="50px"
      mb="15px"
      // boxShadow="inset -30px -30px 29px #110e27,             inset 30px 30px 29px #151231;"
      borderRadius="21px"
      display="flex"
      flexDirection="column"
      alignItems="space-around"
      justifyContent="center"
      border={`2px solid ${borderColor[colorMode]}`}
      minWidth="100%"
    >
      <Box>
        <Link href={`/blog/${slug}`}>
          <a>
            <Text
              fontWeight="bold"
              textAlign="justify"
              color={textColor[colorMode]}
              fontSize="2xl"
              letterSpacing="wide"
              mt="15px"
              mb="1px"
              ml="4px"
            >
              {/* Title for the Blog */}
              {title}
            </Text>
          </a>
        </Link>
      </Box>
      <Box>
        <Text
          fontWeight="bold"
          textAlign="justify"
          fontSize="lg"
          color={textColor[colorMode]}
          ml="4px"
          mb="3px"
        >
          {/* Check out this */}
          {summary}
        </Text>
      </Box>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
        flexDirection="column"
      >
        <Text
          fontWeight="bold"
          textAlign="justify"
          fontSize="md"
          color="cyan.900"
          ml="2px"
        >
          {reading_time["text"]}
        </Text>
        <SimpleGrid
          columns={4}
          spacingX={2}
          spacingY={2}
          minChildWidth="80px"
          mt="9px"
          mb="10px"
          minWidth="100%"
          overflow="visible"
        >
          <ListTags tags={tags} />
        </SimpleGrid>
      </Box>
      
    </Container>
  );
};

export default ListBlogs;
