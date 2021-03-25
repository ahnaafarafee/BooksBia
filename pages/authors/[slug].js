import Head from "next/head";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import MainContentBooks from "../../components/MainContent/MainContentBooks";
import SideContentBooks from "../../components/MainContent/sideContentBooks";
import TruncateString from "../../components/truncateString/truncateString";
import firebase from "../../services/firebase";

import classes from "../../styles/dynamic-pages.module.scss";

const db = firebase.firestore();

export default function Author(props) {
  const [booksByAuthor, setBooksByAuthor] = useState([]);
  const [booksNewAdded, setBooksNewAdded] = useState([]);

  const { author } = props;
  const authorDesc = author.about;

  useEffect(() => {
    db.collection("books")
      .where("author", "==", author.name)
      .onSnapshot((snapshot) =>
        setBooksByAuthor(
          snapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
        )
      );

    db.collection("books").onSnapshot((snapshot) =>
      setBooksNewAdded(
        snapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
      )
    );
  }, []);

  return (
    <div>
      <Head>
        <title>{author.name} | BooksBia</title>
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={classes.imageBox}>
                <img
                  className={classes.img}
                  src={author.photoUrl}
                  alt={author.name}
                />
                <span className={classes.header}>{author.name}</span>
              </div>
              <div className={classes.description}>
                <TruncateString authorDesc={authorDesc} max={800} />
              </div>
              <div className="content__box">
                <h2 className="content__main-heading">
                  All Books of {author.name}
                </h2>
                <div className="content__row">
                  {booksByAuthor.length ? (
                    booksByAuthor.map(({ book, id }) => {
                      return (
                        <MainContentBooks
                          key={id}
                          imageUrl={book?.imageUrl}
                          name={book?.name}
                          author={book?.author}
                          slug={book?.slug}
                        />
                      );
                    })
                  ) : (
                    <div style={{ textAlign: "center" }}>
                      <Loader
                        type="ThreeDots"
                        color="#101d2c"
                        height={50}
                        width={50}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-content">
                <div className="side-content__head">
                  <span className="side-content__v-line"></span>
                  <span className="side-content__heading">Recently Added</span>
                  <span className="side-content__v-line-lg"></span>
                </div>
                <div className="side-content__main">
                  <div className="side-content__row">
                    {booksNewAdded.length ? (
                      booksNewAdded.map(({ id, book }, index) => {
                        if (index <= 20) {
                          return (
                            <SideContentBooks
                              key={id}
                              imageUrl={book?.imageUrl}
                              name={book?.name}
                              author={book?.author}
                              slug={book?.slug}
                            />
                          );
                        }
                      })
                    ) : (
                      <div style={{ textAlign: "center" }}>
                        <Loader
                          type="ThreeDots"
                          color="#101d2c"
                          height={50}
                          width={50}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("authors").where("slug", "==", slug).get();
  const author = res.docs.map((author) => author.data());
  if (author.length) {
    return {
      props: {
        author: author[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export async function getStaticPaths() {
  const snapshot = await db.collection("authors").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug } = doc.data();

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
