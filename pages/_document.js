import NextDocument, { Html, Head, Main, NextScript } from "next/document";
// import GoogleFonts from 'next-google-fonts'
import { ColorModeScript } from "@chakra-ui/react";

import { GA_TRACKING_ID } from "../library/gtag";

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        {/* <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" /> */}
        {/* <Head /> */}
        <Head>
            {/* adsense */}
          <script
            data-ad-client="ca-pub-9723474343210663"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          {/* analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
