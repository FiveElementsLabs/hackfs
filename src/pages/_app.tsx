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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SharedStateProvider>
  );
}

export default MyApp;
