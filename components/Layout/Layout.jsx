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
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
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
