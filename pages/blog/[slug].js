import { useEffect, useState } from "react";

import Link from "next/link";

import moment from "moment";

import { Col, Row } from "react-bootstrap";
import BlogContent from "../../components/BlogContent/BlogContent";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import { getAllBlogs, getBlogBySlug, urlFor } from "../../services/sanity/api";
import SocialShare from "../../components/SocialShare/SocialShare";
import MetaTags from "../../components/MetaTags/MetaTags";

export default function BlogDetail({ blog }) {
  const [currentUrl, setCurrentUrl] = useState("");

  const blog_context = blog.body[0].children[0].text;

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <>
      <MetaTags
        title={`${blog.title} | Deyal`}
        description={`${blog.title} by ${blog.author.name}. ${blog_context}`}
        image={urlFor(blog.coverImage).url()}
      />
      <div className="blog-detail-page">
        <Link href="/blog">
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-angle-left fa-2x"
          ></i>
        </Link>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader
              title={blog.title}
              subtitle={blog.subtitle}
              coverImage={urlFor(blog.coverImage).height(400).url()}
              author={blog.author}
              date={moment(blog.date).format("LL")}
            />
            <hr />
            {/* react share buttons */}
            <SocialShare
              url={String(currentUrl)}
              title={blog.title}
              size="2.5rem"
              shareImage={urlFor(blog.coverImage).url()}
            />
            <div className="content">
              <BlogContent content={blog.body} />
            </div>
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
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
    fallback: "blocking",
  };
}
