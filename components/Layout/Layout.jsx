import Router, { useRouter } from "next/router";
import Head from "next/head";
import nProgress from "nprogress";

import Footer from "../Footer/Footer";
import MainNavbar from "../Navbar/MainNavbar";
import BlogNavbar from "../BlogNavbar/BlogNavbar";

Router.onRouteChangeStart = (url) => {
  nProgress.start();
};

Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>BooksBia | Download and Read Ebooks For Free</title>
      </Head>
      <div className="container">
        {router.route === "/blog" || router.route === "/blog/[slug]" ? (
          <BlogNavbar />
        ) : (
          <MainNavbar />
        )}
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
