import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { Button, useColorMode } from "@chakra-ui/react";

const About = () => {

  const {colorMode, toggleColorMode} = useColorMode()
//   console.log(colorMode)
  return (
    <div>
      <Head>
        <title>Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div>
          Hello About
        {/* <Button onClick={toggleColorMode}>Toggle {colorMode == "light" ? "Dark" : "Light"}</Button> */}
      </div>
    </div>
  );
};

export default About;
