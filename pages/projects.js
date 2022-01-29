import { useState } from "react";

import {
  Container,
  Box,
  Text,
  Center,
  useColorMode,
  useColorModeValue,
  Stack,
  Heading,
  IconButton,
  SimpleGrid,
  Input,
  InputGroup,
  InputRightElement,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

import { AnimationWrapper } from "react-hover-animation";

import { CopyIcon, ExternalLinkIcon, SearchIcon } from "@chakra-ui/icons";

import Navigation from "../components/Navigation";

import getGitRepos from "../library/github";

import Head from "next/head";

const ProjectCard = ({ title, description, clone_url, git_url }) => {
  const toast = useToast();
  return (
    <Box
      maxW={["290px", "400px"]}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Stack>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          my="2"
        >
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            wordBreak={"break-word"}
            mr={2}
          >
            {title}
          </Heading>
          <Box display="flex">
            <Tooltip label="Copy Clone Command" placement="top">
              <IconButton
                aria-label="icon"
                icon={<CopyIcon />}
                size="md"
                fontWeight="bold"
                fontSize="lg"
                isRound
                variant="outline"
                mr={2}
                onClick={() => {
                  navigator.clipboard.writeText(`git clone ${clone_url}`);
                  toast({
                    position: "bottom",
                    render: () => (
                      <Box color="white" p={3} bg="blue.500" borderRadius={4}>
                        Copied
                      </Box>
                    ),
                  });
                }}
              />
            </Tooltip>

            <IconButton
              aria-label="icon"
              icon={<ExternalLinkIcon />}
              size="md"
              fontWeight="bold"
              fontSize="lg"
              isRound
              variant="outline"
              onClick={() => {
                window.open(git_url, "_blank");
              }}
              // colorScheme="gray"
              // backgroundColor="green.400"
              // color="whiteAlpha.900"
            />
          </Box>
        </Box>
        <Text color={"gray.500"}>{description}</Text>
      </Stack>
    </Box>
  );
};

export default function Projects({ projects }) {
  const [searchText, setSearchText] = useState("");

  const filteredProjects = projects.filter((project) => {
    if (project.description) {
      if (
        project.description.toLowerCase().includes(searchText.toLowerCase()) &&
        project.name.toLowerCase().includes(searchText.toLowerCase())
      ) {
        return project;
      }
    } else {
      if (project.name.toLowerCase().includes(searchText.toLowerCase())) {
        return project;
      }
    }
  });

  return (
    <Box minWidth={"100%"}>
      <Head>Projects | Vatsal Saglani</Head>
      <Box minHeight="100vh" minWidth="100%">
        <Box bg={useColorModeValue("#fff", "gray.900")}>
          <Container minWidth={"70%"}>
            <Navigation />
          </Container>
        </Box>
        <Container
          minWidth={"70%"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="stretch"
        >
          <Box my={"20"}>
            <Center>
              <InputGroup>
                <Input
                  aria-label="Search by title"
                  placeholder="Search"
                  color={useColorModeValue("gray.800", "gray.200")}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <InputRightElement>
                  <SearchIcon color="gray.300" />
                </InputRightElement>
              </InputGroup>
            </Center>
          </Box>
          <SimpleGrid
            columns={3}
            spacingX={2}
            spacingY={10}
            p={6}
            minChildWidth="400px"
          >
            {filteredProjects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  title={project.name}
                  description={project.description}
                  clone_url={project.clone_url}
                  git_url={project.html_url}
                />
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  let projects = await getGitRepos();
  return { props: { projects } };
}
