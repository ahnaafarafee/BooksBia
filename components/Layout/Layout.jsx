import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

Router.onRouteChangeStart = (url) => {
  nProgress.start();
};

Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>BooksBia | Download and Read Ebooks For Free</title>
      </Head>
      <div className="container">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
