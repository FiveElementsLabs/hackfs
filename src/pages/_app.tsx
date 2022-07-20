import Head from "next/head";
import type { AppProps } from "next/app";
import { useEvents } from "../hooks/useEvents";
import { SharedStateProvider } from "../lib/store";
import Layout from "../components/layout/layout";
import "../styles/globals.css";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEvents();

  return (
    <SharedStateProvider>
      <Head>
        <title>Tide Protocol | Boost your content and grow your audience.</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SharedStateProvider>
  );
}

export default MyApp;
