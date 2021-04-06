import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Head from "next/head";

import firebase from "../../services/firebase";

import Feature from "../../components/Feature/Feature";
import MainContentBooks from "../../components/MainContent/MainContentBooks";
import SideContentBooks from "../../components/MainContent/sideContentBooks";
import TruncateString from "../../components/truncateString/truncateString";
import { NewAddedBookContext } from "../../fetchData/context/NewAddedBookContext";

const db = firebase.firestore();

export default function bookDetails(props) {
  const { book } = props;

  const [bookByAuthor, setBookByAuthor] = useState([]);
  const [newBooks, setNewBooks] = useContext(NewAddedBookContext);

  const authorDesc = book.authorDetails;

  useEffect(() => {
    db.collection("books")
      .where("author", "==", book.author)
      .onSnapshot((snapshot) =>
        setBookByAuthor(
          snapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
        )
      );
  }, []);

  return (
    <>
      <Head>
        <title>{`${book.name} by ${book.author} | BooksBia`}</title>
      </Head>
      <main className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="preview">
              <div className="preview__img--box">
                <img
                  src={book.imageUrl}
                  alt="Preview Book"
                  className="preview__img"
                />
              </div>
              <div className="preview__details">
                <span className="preview__heading">{book.name}</span>
                <span className="preview__heading">{book.author}</span>
                <span className="preview__heading">
                  Last Update: 18.11.2019
                </span>
              </div>
            </div>
            <div className="details">
              <div className="details__book">
                <h2 className="details__heading">
                  Read the book description before downloading
                </h2>
                <p className="details__main">{book.bookDetails}</p>
              </div>
              <div className="details__author">
                <h2 className="details__heading">
                  Some Words about the Writer
                </h2>
                <div className="details__main">
                  <TruncateString authorDesc={authorDesc} max={800} />
                </div>
              </div>
            </div>
            <div className="button">
              <a href={book.link} target="_blank" className="button-download">
                Read Online
              </a>
              <span> or </span>
              <a href={book.dlink} target="_blank" className="button-download">
                Download
              </a>
            </div>
            <Feature isInSlug />
            <div className="content__box">
              <h2 className="content__main-heading">
                More books by {book.author}
              </h2>
              <div className="content__row">
                {bookByAuthor.length ? (
                  bookByAuthor.map(({ book, id }) => {
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
                {/* <span className="side-content__v-line"></span> */}
                <span className="side-content__heading">Recently Added</span>
                <span className="side-content__v-line-lg"></span>
              </div>
              <div className="side-content__main">
                <div className="side-content__row">
                  {newBooks.length ? (
                    newBooks.map(({ id, book }, index) => {
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
      </main>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("books").where("slug", "==", slug).get();
  const book = res.docs.map((book) => book.data());
  if (book.length) {
    return {
      props: {
        book: book[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
export async function getStaticPaths() {
  const snapshot = await db.collection("books").get();

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
