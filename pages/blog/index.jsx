import { Container, Row, Col } from "react-bootstrap";

import CardItem from "../../components/Card/CardItem";
import CardListItem from "../../components/Card/CardListItem";

import { getAllBlogs } from "../../services/sanity/api";

export default function Blog({ blogs }) {
  // debugger;
  return (
    <Container>
      <div className="blog-detail-page">
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            {/* <Col md="10">
              <CardListItem />
            </Col> */}
            {blogs.map((blog) => (
              <Col key={blog.slug} md="4">
                <CardItem
                  title={blog.title}
                  subtitle={blog.subtitle}
                  date={blog.date}
                  image={blog.coverImage}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
