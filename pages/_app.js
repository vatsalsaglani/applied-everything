import React from "react";
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import customTheme from "../styles/theme";
import { Global, css } from "@emotion/react";
import { prismLightTheme, prismDarkTheme } from "../styles/prism";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
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
            background: ${colorMode === "light" ? "white" : "#12102c"};
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
    <ChakraProvider>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          // useSystemColorMode: true,
        }}
      >
        <GlobalStyle minWidth="100%">
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
