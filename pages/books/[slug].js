import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import firebase from "../../services/firebase";
import { toJSON } from "../../services/firebase";

import Feature from "../../components/Feature/Feature";
import MainContentBooks from "../../components/MainContent/MainContentBooks";
import TruncateString from "../../components/truncateString/truncateString";
import { useRouter } from "next/router";

import moment from "moment";
import SideContent from "../../components/MainContent/SideContent";
import SocialShare from "../../components/SocialShare/SocialShare";
import MetaTags from "../../components/MetaTags/MetaTags";

const db = firebase.firestore();

export default function bookDetails(props) {
  const { book } = props;
  const router = useRouter();

  const [bookByAuthor, setBookByAuthor] = useState([]);
  const [currentUrl, setCurrentUrl] = useState("");

  const dateCreated = book?.createdAt;

  const date = moment(dateCreated).format("LL");

  const authorDesc = book?.authorDetails;

  useEffect(() => {
    db.collection("books")
      .where("author", "==", book.author)
      .onSnapshot((snapshot) =>
        setBookByAuthor(
          snapshot.docs.map((doc) => ({ id: doc.id, book: doc.data() }))
        )
      );

    setCurrentUrl(window.location.href);
  }, [router]);

  return (
    <>
      <MetaTags
        title={`${book?.name} by ${book?.author} | BooksBia`}
        description={`Download or Read online ${book?.name} by ${book?.author} for free in PDF format.`}
        image={book.imageUrl}
      />
      <main className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="preview">
              <div className="preview__img--box">
                <img
                  src={book?.imageUrl}
                  alt="Preview Book"
                  className="preview__img"
                />
              </div>
              <div className="preview__details">
                <span className="preview__heading">{book?.name}</span>
                <span className="preview__heading">{book?.author}</span>
                <span className="preview__heading">Last Update: {date}</span>
              </div>
            </div>
            {/* react share buttons */}
            <SocialShare
              url={String(currentUrl)}
              title={book?.name}
              size="2.5rem"
              shareImage={book?.imageUrl}
            />
            <div className="details">
              <div className="details__book">
                <h2 className="details__heading">
                  Read the book description before downloading
                </h2>
                <p className="details__main">{book?.bookDetails}</p>
              </div>
              <div className="details__author">
                <h2 className="details__heading">About {book?.author}</h2>
                <div className="details__main">
                  <TruncateString authorDesc={authorDesc} max={800} />
                </div>
              </div>
            </div>
            <div className="button">
              <a href={book?.link} target="_blank" className="button-download">
                Read Online
              </a>
              <span> or </span>
              <a href={book?.dlink} target="_blank" className="button-download">
                Download
              </a>
            </div>
            <Feature isInSlug />
            <div className="content__box">
              <h2 className="content__main-heading">
                More books by {book?.author}
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
            <SideContent />
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const res = await db.collection("books").where("slug", "==", slug).get();
  const book = res.docs.map((book) => toJSON(book));
  return { props: { book: book[0] }, revalidate: 20 }; //revalidate every 20 seconds
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
    fallback: "blocking",
  };
}
