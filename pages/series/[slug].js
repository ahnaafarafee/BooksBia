import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import firebase from "../../services/firebase";
import TruncateString from "../../components/truncateString/truncateString";
import MainContentBooks from "../../components/MainContent/MainContentBooks";

import classes from "../../styles/dynamic-pages.module.scss";
import { useRouter } from "next/router";
import SideContent from "../../components/MainContent/SideContent";

import MetaTags from "../../components/MetaTags/MetaTags";

const db = firebase.firestore();

export default function Series(props) {
  const router = useRouter();

  const [booksBySeries, setBooksBySeries] = useState([]);

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
      <MetaTags
        title={`${series?.name} | BooksBia`}
        description={`Download or Read online all books of ${series?.name} for free in PDF format.`}
        image={series?.photoUrl}
      />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className={classes.imageBox}>
                <img
                  className={classes?.img}
                  src={series?.photoUrl}
                  alt={series?.name}
                />
                <span className={classes.header}>{series?.name}</span>
              </div>
              <div className={classes.description}>
                <TruncateString authorDesc={seriesDesc} max={800} />
              </div>
              <div className="content__box">
                <h2 className="content__main-heading">
                  All Books of {series?.name}
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
              <SideContent />
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
  return {
    props: {
      series: series[0],
    },
    revalidate: 60,
  };
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
