import { useEffect, useState } from "react";

import Link from "next/link";

import moment from "moment";

import { Col, Row } from "react-bootstrap";
import BlogContent from "../../components/BlogContent/BlogContent";
import BlogHeader from "../../components/BlogHeader/BlogHeader";
import {
  getAllBlogs,
  getBlogBySlug,
  urlFor,
  getBlogsByCat,
} from "../../services/sanity/api";
import SocialShare from "../../components/SocialShare/SocialShare";
import MetaTags from "../../components/MetaTags/MetaTags";
import PostView from "../../components/PostView/PostView";

export default function BlogDetail({ blog, categories }) {
  // console.log("CONSOLE LOG ->", categories);
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
              minutes={blog?.minutes}
              coverImage={urlFor(blog.coverImage).height(400).url()}
              author={blog.author}
              date={moment(blog.date).format("LL")}
            />
            <hr />
            {/* react share buttons */}
            <h4>Share with</h4>
            <SocialShare
              url={String(currentUrl)}
              title={blog.title}
              size="3.5rem"
              shareImage={urlFor(blog.coverImage).url()}
            />
            <br />
            <div className="content">
              <BlogContent content={blog.body} />
            </div>
            <hr/>
            <PostView categories={categories} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  const categories = await getBlogsByCat(blog.categories[0]);

  return {
    props: { blog, categories },
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
