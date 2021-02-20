import { useEffect, useState } from "react";

import MainContentBooks from "./MainContentBooks";
import SideContentBooks from "./sideContentBooks";

import firebase from "../../services/firebase";

function MainContent() {
  const db = firebase.firestore();

  const [books, setBooks] = useState([]);
  const [shuffledBooks, setShuffledBooks] = useState([]);
  const [booksNewAdded, setBooksNewAdded] = useState([]);

  useEffect(() => {
    db.collection("books").onSnapshot((snapshot) =>
      setBooks(snapshot.docs.map((doc) => doc.data()))
    );

    setShuffledBooks(
      books
        .map((a) => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
    );

    db.collection("books")
      .orderBy("added", "desc")
      .onSnapshot((snapshot) =>
        setBooksNewAdded(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  console.log(shuffledBooks, "shuffled");
  console.log(books, "unshaffled");

  return (
    <>
      <section className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content__box">
                <h2 className="content__main-heading">Trending</h2>
                <div className="content__row">
                  {shuffledBooks.map((doc, index) => {
                    if (index <= 10) {
                      return (
                        <MainContentBooks
                          key={doc.id}
                          imageUrl={doc.imageUrl}
                          name={doc.name}
                          author={doc.author}
                        />
                      );
                    }
                  })}
                </div>
              </div>
              <div className="content__box">
                <h2 className="content__main-heading">Humu</h2>
                <div className="content__row">
                  {books.map((doc, index) => {
                    if (doc.author === "Humayun Ahmed") {
                      return (
                        <MainContentBooks
                          key={doc.id}
                          imageUrl={doc.imageUrl}
                          name={doc.name}
                          author={doc.author}
                        />
                      );
                    }
                  })}
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
                    {booksNewAdded.map((doc, index) => {
                      if (index <= 20) {
                        return (
                          <SideContentBooks
                            key={doc.id}
                            imageUrl={doc.imageUrl}
                            name={doc.name}
                            author={doc.author}
                            added={doc.added}
                          />
                        );
                      }
                    })}
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

export default MainContent;
