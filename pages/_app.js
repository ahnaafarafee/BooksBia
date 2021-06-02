import Head from "next/head";

import Layout from "../components/Layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";

import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faBorderAll);

import "@fortawesome/fontawesome-svg-core/styles.css";

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
