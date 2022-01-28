import { Nav, Navbar } from "react-bootstrap";

import Link from "next/link";

export default function BlogNavbar() {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Link href="/blog">
          <Navbar.Brand>
            <img
              src="/logo/logo-light.svg"
              alt="blog-logo"
              height="100px"
              width="100px"
              className="blog-logo"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link href="/blog">
              <a className="nav-link">Home</a>
            </Link>
            <Link href="/write-in-blog">
              <a className="nav-link">Write</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">Contact Us</a>
            </Link>
            <Link href="/copyright">
              <a className="nav-link">Copyright Issue</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="nav-link">Privacy Policy</a>
            </Link>
            <Link href="/terms-and-conditions">
              <a className="nav-link">Terms And Conditions</a>
            </Link>
            <Nav.Link
              href="https://www.facebook.com/groups/readdeyal"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </Nav.Link>
            <Nav.Link
              href="https://www.pinterest.com/ahnaafalrafee/reviews-and-poems/"
              target="_blank"
            >
              <i className="fab fa-pinterest"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
