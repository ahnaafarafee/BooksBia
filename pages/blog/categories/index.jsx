import { getAllCategories } from "../../../services/sanity/api";
import Link from "next/link";

import MetaTags from "../../../components/MetaTags/MetaTags";

export default function Blog({ categories }) {
  // console.log(categories);
  return (
    <>
      <MetaTags
        title={`Deyal | Categories`}
        description={`Read awesome blog posts by renowned authors daily!`}
        image="https://i.ibb.co/dBzFpCD/booksbia.png"
      />
      <div className="cat-container">
        <hr />
        <Link href="/blog">
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-angle-left fa-2x"
          ></i>
        </Link>
        <h1 className="cat-title">Topics</h1>
        <p className="cat-item-description">
          Read the topics you are interested in. Deyal has a pretty good amount
          of choices to choose from. Read whatever you want, enjoy reading!
        </p>

        {categories.map((category, index) => {
          // console.log(category.slug.current);
          return (
            <div key={index} className="cat-item">
              <h3 className="cat-item-title">{category.title}</h3>
              <p className="cat-item-description">{category.description}</p>
              <Link
                className="cat-item-link"
                href={`/blog/categories/${category.slug.current}`}
              >
                <a>
                  Read Now{" "}
                  <i
                    style={{ cursor: "pointer" }}
                    className="fas fa-arrow-right"
                  ></i>
                </a>
              </Link>
            </div>
          );
        })}
        <style jsx>{`
          .cat-container {
            background-color: #ffff;
            box-shadow: 0px 2.5rem 1.5rem 0.9rem rgb(133 134 136 / 60%);
            font-size: 2rem;
            text-align: justify;
            padding: 1.5rem;
            min-height: 100vh;
          }
          .cat-title {
            font-size: 3.5rem;
            padding: 3rem 0;
          }
          .cat-item {
            margin: 3rem 0;
          }
          .cat-item-title {
            font-size: 2.5rem;
            font-weight: 600;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const categories = await getAllCategories();
  return {
    props: {
      categories,
    },
    revalidate: 60,
  };
}
