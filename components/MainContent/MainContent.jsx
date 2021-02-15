import { useEffect, useState } from "react";

import MainContentBooks from "./MainContentBooks";
import SideContentBooks from "./sideContentBooks";

import firebase from "../../services/firebase";

function MainContent() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("books").onSnapshot((snapshot) =>
      setBooks(snapshot.docs.map((doc) => doc.data()))
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
                  {books.map((doc) => (
                    <MainContentBooks
                      key={doc.id}
                      imageUrl={doc.imageUrl}
                      name={doc.name}
                      author={doc.author}
                    />
                  ))}
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
                    <div className="side-content__row--side">
                      {books.map((doc) => (
                        <SideContentBooks
                          key={doc.id}
                          imageUrl={doc.imageUrl}
                          name={doc.name}
                          author={doc.author}
                        />
                      ))}
                    </div>
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
