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
              src="/logo/blog-logo.jpg"
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
            <Nav.Link
              href="https://www.facebook.com/groups/524017418618959"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
