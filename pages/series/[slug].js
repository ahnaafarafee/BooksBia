import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import Head from "next/head";

import firebase from "../../services/firebase";
import TruncateString from "../../components/truncateString/truncateString";
import MainContentBooks from "../../components/MainContent/MainContentBooks";
import SideContentBooks from "../../components/MainContent/sideContentBooks";

import classes from "../../styles/dynamic-pages.module.scss";
import { NewAddedBookContext } from "../../fetchData/context/NewAddedBookContext";
import SideContentHead from "../../components/SideContentHead/SideContentHead";
import { useRouter } from "next/router";

const db = firebase.firestore();

export default function Series(props) {
  const router = useRouter();

  const [booksBySeries, setBooksBySeries] = useState([]);
  const [newBooks, setNewBooks] = useContext(NewAddedBookContext);

  const { series } = props;
  const seriesDesc = series.description;

  useEffect(() => {
    db.collection("books")
      .where("series", "==", series.name)
      .onSnapshot((snapshot) =>
        setBooksBySeries(
          snapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
        )
      );
  }, [router]);

  return (
    <div>
      <Head>
        <title>{series.name} | BooksBia</title>
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={classes.imageBox}>
                <img
                  className={classes.img}
                  src={series.photoUrl}
                  alt={series.name}
                />
                <span className={classes.header}>{series.name}</span>
              </div>
              <div className={classes.description}>
                <TruncateString authorDesc={seriesDesc} max={800} />
              </div>
              <div className="content__box">
                <h2 className="content__main-heading">
                  All Books of {series.name}
                </h2>
                <div className="content__row">
                  {booksBySeries.length ? (
                    booksBySeries.map(({ book, id }) => {
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
                <SideContentHead />
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
  const res = await db.collection("series").where("slug", "==", slug).get();
  const series = res.docs.map((series) => series.data());
  if (series.length) {
    return {
      props: {
        series: series[0],
      },
      revalidate: 60,
    };
  } else {
    return {
      props: {},
    };
  }
};
export async function getStaticPaths() {
  const snapshot = await db.collection("series").get();

  const paths = snapshot.docs.map((doc) => {
    const { slug } = doc.data();

    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
}
