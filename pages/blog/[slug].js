import Head from "next/head";

import { Col, Row } from "react-bootstrap";
import BlogContent from "../../components/BlogContent/BlogContent";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import { getAllBlogs, getBlogBySlug, urlFor } from "../../services/sanity/api";

import moment from "moment";

export default function BlogDetail({ blog }) {
  debugger;

  return (
    <>
      <Head>
        <title>{`${blog.title} | Booksbia Blog`}</title>
      </Head>
      <div className="blog-detail-page">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader
              title={blog.title}
              subtitle={blog.subtitle}
              coverImage={urlFor(blog.coverImage).height(600).url()}
              author={blog.author}
              date={moment(blog.date).format("LLL")}
            />
            <hr />
            <BlogContent content={blog.body} />
          </Col>
        </Row>
      </div>
    </>
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
