import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    return (
      <>
        <Html lang="en">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
              rel="stylesheet"
            />

            <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.0/dist/flowbite.min.css" />
          </Head>

          <body>
            <Main />
            <NextScript />
            <Script src="https://unpkg.com/flowbite@1.5.0/dist/flowbite.js"></Script>
            <Script src="../path/to/flowbite/dist/datepicker.js"></Script>
          </body>
        </Html>
      </>
    );
  }
}
