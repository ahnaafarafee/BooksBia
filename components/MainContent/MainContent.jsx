import { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";

import MainContentBooks from "./MainContentBooks";
import SideContentBooks from "./sideContentBooks";

import firebase from "../../services/firebase";
import { NewAddedBookContext } from "../../fetchData/context/NewAddedBookContext";
import SideContentHead from "../SideContentHead/SideContentHead";

const db = firebase.firestore();

export default function MainContent() {
  const [newBooks, setNewBooks] = useContext(NewAddedBookContext);

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
                      if (index <= 10) {
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
      </section>
    </>
  );
}
