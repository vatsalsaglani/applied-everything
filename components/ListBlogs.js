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
  Center,
  Image,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { AnimationWrapper } from "react-hover-animation";

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

const RenderBlogCard = ({
  cover_image,
  title,
  tags,
  summary,
  slug,
  reading_time,
}) => (
  <Link href={`/blog/${slug}`}>
    <a>
      <AnimationWrapper>
        <Center py={6}>
          <Box
            maxW={"445px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"md"}
            p={6}
            overflow={"hidden"}
          >
            <Box
              // h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              pos={"relative"}
            >
              <Image src={cover_image} layout={"cover"} />
            </Box>
            <Stack>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                {reading_time.text}
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {title}
              </Heading>
              <Text color={"gray.500"}>{summary}</Text>
            </Stack>
          </Box>
        </Center>
      </AnimationWrapper>
    </a>
  </Link>
);

const ListBlogs = ({
  title,
  tags,
  summary,
  slug,
  reading_time,
  cover_image,
}) => {
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

  console.log(title, tags, summary, slug, reading_time, cover_image);

  return (
    // <NextLink href={`/blog/${slug}`} passHref>
    <RenderBlogCard
      cover_image={cover_image}
      summary={summary}
      title={title}
      slug={slug}
      reading_time={reading_time}
      tags={tags}
    />
    // <Container
    //   mt="50px"
    //   mb="15px"
    //   // boxShadow="inset -30px -30px 29px #110e27,             inset 30px 30px 29px #151231;"
    //   borderRadius="21px"
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="space-around"
    //   justifyContent="center"
    //   border={`2px solid ${borderColor[colorMode]}`}
    //   minWidth="100%"
    // >
    //   <Box>
    //     <Link href={`/blog/${slug}`}>
    //       <a>
    //         <Text
    //           fontWeight="bold"
    //           textAlign="justify"
    //           color={textColor[colorMode]}
    //           fontSize="xl"
    //           letterSpacing="wide"
    //           mt="15px"
    //           mb="1px"
    //           ml="4px"
    //         >
    //           {/* Title for the Blog */}
    //           {title}
    //         </Text>
    //       </a>
    //     </Link>
    //   </Box>
    //   <Box>
    //     <Text
    //       fontWeight="bold"
    //       textAlign="justify"
    //       fontSize="md"
    //       color={textColor[colorMode]}
    //       ml="4px"
    //       mb="3px"
    //     >
    //       {/* Check out this */}
    //       {summary}
    //     </Text>
    //   </Box>
    //   <Box
    //     display="flex"
    //     alignItems="flex-start"
    //     justifyContent="space-between"
    //     flexDirection="column"
    //   >
    //     <Text
    //       fontWeight="bold"
    //       textAlign="justify"
    //       fontSize="sm"
    //       color="cyan.900"
    //       ml="2px"
    //       mb="15px"
    //     >
    //       {reading_time["text"]}
    //     </Text>
    //     {/* <SimpleGrid
    //       columns={4}
    //       spacingX={2}
    //       spacingY={2}
    //       minChildWidth="80px"
    //       mt="9px"
    //       mb="10px"
    //       minWidth="100%"
    //       overflow="visible"
    //     >
    //       <ListTags tags={tags} />
    //     </SimpleGrid> */}
    //   </Box>
    // </Container>
  );
};

export default ListBlogs;
