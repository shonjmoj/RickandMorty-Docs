import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rick&Morty</title>
        <link rel="icon" type="image/png" sizes="any" href="/images/icon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
