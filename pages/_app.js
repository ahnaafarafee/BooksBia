import Layout from "../components/Layout/Layout";

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.scss";
import { NewAddedBookProvider } from "../fetchData/context/NewAddedBookContext";

function MyApp({ Component, pageProps }) {
  return (
    <NewAddedBookProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </NewAddedBookProvider>
  );
}

export default MyApp;
