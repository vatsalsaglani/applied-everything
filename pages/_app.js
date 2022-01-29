import React, { useEffect } from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";
import { useRouter } from "next/router";
import { Fonts } from "../components/Fonts";

// import * as gtag from "../library/gtag";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      // gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Global
        styles={css`
          ${colorMode === "light" ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #90cdf4;
            color: #fefefe;
          }
          html {
            min-width: 100%;
            scroll-behavior: smooth;
            overflow-x: hidden;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            min-width: 100vw;
            background: ${colorMode === "light" ? "#edf0f5" : "#1A212C"};
            overflow-x: hidden;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          // useSystemColorMode: true,
        }}
      >
        <GlobalStyle minWidth="100vw">
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
