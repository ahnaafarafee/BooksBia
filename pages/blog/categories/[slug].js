import { getAllCategories, getBlogsByCat } from "../../../services/sanity/api";
import { Container, Row, Col } from "react-bootstrap";
import MetaTags from "../../../components/MetaTags/MetaTags";
import CardItem from "../../../components/Card/CardItem";
import moment from "moment";
import Link from "next/link";

export default function Category({ categories }) {
  return (
    <>
      <MetaTags
        title={`${categories[0].subtitle} | Deyal`}
        description={`${categories.length} post(s) found in ${categories[0].subtitle} topic.`}
        image="https://i.ibb.co/dBzFpCD/booksbia.png"
      />

      <Container>
        <div className="cat-container">
          <hr />
          <Link href="/blog/categories">
            <i
              style={{ cursor: "pointer" }}
              className="fas fa-angle-left fa-2x"
            ></i>
          </Link>
          <div className={`page-wrapper`}>
            <div>
              {`${categories.length} post(s) found in ${
                categories[0].subtitle ? categories[0].subtitle : "selected"
              } topic.`}
            </div>

            <div className="main-content">
              {categories.length < 1 ? (
                <span>Sorry No Posts Found!</span>
              ) : (
                <Row className="mb-5">
                  {categories.map((blog) => (
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
                  ))}
                </Row>
              )}
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
        .cat-container {
          background-color: #ffff;
          box-shadow: 0px 2.5rem 1.5rem 0.9rem rgb(133 134 136 / 60%);
          font-size: 2rem;
          text-align: justify;
          padding: 1.5rem;
          min-height: 100vh;
        }
        .main-content {
          padding: 4rem;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ params }) {
  const categories = await getBlogsByCat(params.slug);

  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const cats = await getAllCategories();
  return {
    paths: cats?.map((b) => ({ params: { slug: b.title } })),
    fallback: "blocking",
  };
}

// export async function getStaticProps({ params }) {
//   const blog = await getCategoryBySlug(params.slug);
//   return {
//     props: { blog },
//     revalidate: 60,
//   };
// }

// export async function getStaticPaths() {
//   const blogs = await getAllBlogs();
//   return {
//     paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
//     fallback: "blocking",
//   };
// }
