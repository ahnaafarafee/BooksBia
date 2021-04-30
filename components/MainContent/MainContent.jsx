import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import MainContentBooks from "./MainContentBooks";

import firebase from "../../services/firebase";
import SideContent from "./SideContent";

const db = firebase.firestore();

export default function MainContent() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    db.collection("books").onSnapshot((snapshot) =>
      setBooks(
        snapshot.docs
          .map((a) => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map((a) => a.value)
          .map((doc) => ({ id: doc.id, book: doc.data() }))
      )
    );
  }, []);

  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content__box">
                <h2 className="content__main-heading">Trending</h2>
                <div className="content__row">
                  {books.length ? (
                    books.map(({ book, id }, index) => {
                      if (index <= 20) {
                        return (
                          <MainContentBooks
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
            <div className="col-lg-4">
              <SideContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
