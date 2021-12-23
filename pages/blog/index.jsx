import Head from "next/head";
import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import CardItem from "../../components/Card/CardItem";
import CardListItem from "../../components/Card/CardListItem";
import FilteringMenu from "../../components/FilteringMenu/FilteringMenu";

import { getAllBlogs } from "../../services/sanity/api";

import moment from "moment";
import MetaTags from "../../components/MetaTags/MetaTags";

export default function Blog({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });

  return (
    <>
      <MetaTags
        title={`Deyal`}
        description={`Read awesome blog posts by renowned authors daily!`}
        image="https://i.ibb.co/dBzFpCD/booksbia.png"
      />
      <Container>
        <div className="blog-detail-page">
          <div className={`page-wrapper`}>
            <FilteringMenu
              filter={filter}
              onChange={(option, value) => {
                // debugger;
                setFilter({ ...filter, [option]: value });
              }}
            />
            <hr />
            <Row className="mb-5">
              {blogs.map((blog) =>
                filter.view.list ? (
                  <Col key={`${blog.slug}-list`} md="9">
                    <CardListItem
                      author={blog?.author}
                      title={blog?.title}
                      subtitle={blog?.subtitle}
                      date={moment(blog?.date).format("LL")}
                      link={{
                        href: "/blog/[slug]",
                        as: `/blog/${blog?.slug}`,
                      }}
                    />
                  </Col>
                ) : (
                  <Col key={blog?.slug} md="4">
                    <CardItem
                      author={blog?.author}
                      title={blog?.title}
                      subtitle={blog?.subtitle}
                      date={moment(blog?.date).format("LL")}
                      image={blog?.coverImage}
                      link={{
                        href: "/blog/[slug]",
                        as: `/blog/${blog?.slug}`,
                      }}
                    />
                  </Col>
                )
              )}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
}
