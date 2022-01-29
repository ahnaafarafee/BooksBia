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
            <Link href="/write-in-blog">
              <a className="nav-link">Write</a>
            </Link>
            <Link href="/blog/categories">
              <a className="nav-link">All Topics</a>
            </Link>
            <Link href="/blog/categories/review">
              <a className="nav-link">Book Reviews</a>
            </Link>
            <Link href="/blog/categories/science">
              <a className="nav-link">Science</a>
            </Link>
            <Link href="/blog/categories/history-and-culture">
              <a className="nav-link">History & Culture</a>
            </Link>
            <Link href="/blog/categories/pop-culture">
              <a className="nav-link">Pop Culture</a>
            </Link>
            <Link href="/blog/categories/poem">
              <a className="nav-link">Poetry</a>
            </Link>
            <Link href="/blog/categories/story">
              <a className="nav-link">Stories</a>
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
