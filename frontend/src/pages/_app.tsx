import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { useEvents } from "../hooks/useEvents";
import { SharedStateProvider } from "../lib/store";
import { Provider as CeramicProvider } from "@self.id/react";
import { ToastBox } from "../components/Toast";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEvents();

  return (
    <SharedStateProvider>
      <Head>
        <title>Tide Protocol | Boost your content and grow your audience</title>
      </Head>
      <Layout>
        <CeramicProvider client={{ ceramic: "testnet-clay" }}>
          <Component {...pageProps} />
          <ToastBox />
        </CeramicProvider>
      </Layout>
    </SharedStateProvider>
  );
}

export default MyApp;
