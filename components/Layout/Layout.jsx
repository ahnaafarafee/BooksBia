import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
