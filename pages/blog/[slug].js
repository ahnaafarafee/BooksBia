import { Col, Row } from "react-bootstrap";
import BlogContent from "../../components/BlogContent/BlogContent";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import { getAllBlogs, getBlogBySlug } from "../../services/sanity/api";

export default function BlogDetail({ blog }) {
  debugger;

  return (
    <div className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={blog.coverImage}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          <BlogContent content={blog.body} />
        </Col>
      </Row>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
    fallback: false,
  };
}
