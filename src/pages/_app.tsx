import Head from "next/head";
import type { AppProps } from "next/app";
import { SharedStateProvider } from "../lib/store";
import Layout from "../components/layout/layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SharedStateProvider>
      <Head>
        <title>HackFS</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SharedStateProvider>
  );
}

export default MyApp;
