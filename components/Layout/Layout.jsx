import Router, { useRouter } from "next/router";
import Head from "next/head";
import nProgress from "nprogress";

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
        <BlogNavbar />
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Layout;
