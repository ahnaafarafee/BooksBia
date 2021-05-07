import { useEffect, useState } from "react";
import Head from "next/head";

import moment from "moment";

import { Col, Row } from "react-bootstrap";
import BlogContent from "../../components/BlogContent/BlogContent";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import { getAllBlogs, getBlogBySlug, urlFor } from "../../services/sanity/api";
import SocialShare from "../../components/SocialShare/SocialShare";
import MetaTags from "../../components/MetaTags/MetaTags";

export default function BlogDetail({ blog }) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <>
      <MetaTags
        title={`${blog.title} | Booksbia Blog`}
        description={`Read awesome blog post ${blog.title} by ${blog.author.name}`}
        image={urlFor(blog.coverImage).url()}
      />
      <div className="blog-detail-page">
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <BlogHeader
              title={blog.title}
              subtitle={blog.subtitle}
              coverImage={urlFor(blog.coverImage).height(400).url()}
              author={blog.author}
              date={moment(blog.date).format("LLL")}
            />
            <hr />
            {/* react share buttons */}
            <SocialShare
              url={String(currentUrl)}
              title={blog.title}
              size="2.5rem"
              shareImage={urlFor(blog.coverImage).url()}
            />
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
