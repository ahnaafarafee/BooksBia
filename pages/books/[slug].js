import Feature from "../../components/Feature/Feature";
import firebase from "../../services/firebase";

export const getStaticProps = async (context) => {
  const db = firebase.firestore();
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
  const snapshot = await firebase.firestore().collection("books").get();

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

export default function bookDetails(props) {
  const { book } = props;
  return (
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
              <span className="preview__heading">File Size: 4 MB</span>
              <span className="preview__heading">Last Update: 18.11.2019</span>
              <span className="preview__heading">Rating: ⭐⭐⭐⭐⭐</span>
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
                Read the book description before downloading
              </h2>
              <p className="details__main">{book.bookDetails}</p>
            </div>
          </div>
          <div className="button">
            <a href={book.link} target="_blank" className="button-download">
              Read Online
            </a>
            <span>or</span>
            <a
              href={book.link}
              download={`${book.name} by ${book.author} BooksBia Production`}
              className="button-download"
            >
              Download
            </a>
          </div>
          <Feature isInSlug/>
          <div className="content__box">
            <h2 className="content__main-heading">
              More Books From Humayun Ahmed
            </h2>
            <div className="content__row">
              <div className="content__row--books">
                <a href="#" className="content__book-link">
                  <img
                    src="./assets/books/book-1.jpg"
                    alt="#"
                    className="content__poster"
                  />
                  <h4 className="content__heading--sub">
                    Jochna O Jononir Golpo
                  </h4>
                  <h4 className="content__heading--sub">Humayun Ahmed</h4>
                </a>
              </div>
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
                  <a href="#" className="content__book-link">
                    <div className="side-content--floating">
                      <img
                        src="./assets/books/book-1.jpg"
                        alt="#"
                        className="content__poster"
                      />
                      <div className="side-content__heading-side">
                        <h4 className="side-content__heading--sub">
                          Jochna O Jononir Golpo
                        </h4>
                        <h4 className="side-content__heading--sub">
                          Humayun Ahmed
                        </h4>
                        <h3 className="side-content__heading--sub">
                          File Size: 1.2 Mb
                        </h3>
                        <h3 className="side-content__heading--sub">
                          Uploaded: 24.01.20
                        </h3>
                        <h3 className="side-content__heading--sub">
                          Rating: ⭐⭐⭐
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="side-content__row--side">
                  <a href="#" className="content__book-link">
                    <div className="side-content--floating">
                      <img
                        src="./assets/books/book-2.jpg"
                        alt="#"
                        className="content__poster"
                      />
                      <div className="side-content__heading-side">
                        <h4 className="side-content__heading--sub">Opekkha</h4>
                        <h4 className="side-content__heading--sub">
                          Humayun Ahmed
                        </h4>
                        <h3 className="side-content__heading--sub">
                          File Size: 1.2 Mb
                        </h3>
                        <h3 className="side-content__heading--sub">
                          Uploaded: 24.01.20
                        </h3>
                        <h3 className="side-content__heading--sub">
                          Rating: ⭐⭐⭐
                        </h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
