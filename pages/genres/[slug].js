import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import firebase from "../../services/firebase";
import MainContentBooks from "../../components/MainContent/MainContentBooks";
import { useRouter } from "next/router";
import SideContent from "../../components/MainContent/SideContent";
import MetaTags from "../../components/MetaTags/MetaTags";

const db = firebase.firestore();

export default function Genre(props) {
  const router = useRouter();

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
  }, [router]);

  return (
    <div>
      <MetaTags
        title={`${genre?.name} | BooksBia`}
        description={`Download or Read online all books of ${genre?.name} genre for free in PDF format.`}
        image="https://i.ibb.co/dBzFpCD/booksbia.png"
      />
      <main>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content__box">
                <h2 className="content__main-heading">
                  All Books of {genre?.name} genre
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
  const res = await db.collection("genres").where("slug", "==", slug).get();
  const genre = res.docs.map((genre) => genre.data());
  return { props: { genre: genre[0] }, revalidate: 60 };
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
    fallback: "blocking",
  };
}
