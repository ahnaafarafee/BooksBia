import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <h1>Footer</h1>
    </div>
  );
}

export default Layout;
