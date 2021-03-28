import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import Head from "next/head";

import firebase from "../../services/firebase";
import MainContentBooks from "../../components/MainContent/MainContentBooks";
import SideContentBooks from "../../components/MainContent/sideContentBooks";
import { NewAddedBookContext } from "../../fetchData/context/NewAddedBookContext";

const db = firebase.firestore();

export default function Genre(props) {
  const [newBooks, setNewBooks] = useContext(NewAddedBookContext);
  const [booksByGenre, setBooksByGenre] = useState([]);

  const { genre } = props;

  useEffect(() => {
    db.collection("books")
      .where("genre", "==", genre.slug)
      .onSnapshot((snapshot) =>
        setBooksByGenre(
          snapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
        )
      );
  }, []);

  return (
    <div>
      <Head>
        <title>{genre.name} | BooksBia</title>
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content__box">
                <h2 className="content__main-heading">
                  All Books of {genre.name} genre
                </h2>
                <div className="content__row">
                  {booksByGenre.length ? (
                    booksByGenre.map(({ book, id }) => {
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
        </div>
      </main>
    </div>
  );
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("genres").where("slug", "==", slug).get();
  const genre = res.docs.map((genre) => genre.data());
  if (genre.length) {
    return {
      props: {
        genre: genre[0],
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export async function getStaticPaths() {
  const snapshot = await db.collection("genres").get();

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
