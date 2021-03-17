import Router from "next/router";
import Head from "next/head";
import nProgress from "nprogress";

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Loader from "../Loader/Loader";

Router.onRouteChangeStart = (url) => {
  nProgress.start();
};

Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

function Layout({ children }) {
  if (!children) {
    return <Loader show/>;
  }
  return (
    <>
      <Head>
        <title>BooksBia | Download and Read Ebooks For Free</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Read Bengali Books Online Free. BooksBia is online Bengali books reading library. You can download all Bengali books in PDF."
        />
        <meta
          name="keywords"
          content="books, ebook, pdf, bangla, bengali books, humayun ahmed"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
