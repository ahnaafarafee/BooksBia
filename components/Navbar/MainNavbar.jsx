import { useEffect, useState } from "react";

import Link from "next/link";
import firebase from "../../services/firebase";

const db = firebase.firestore();

const LOGO_LINK =
  "https://firebasestorage.googleapis.com/v0/b/booksiba-28d4a.appspot.com/o/logo.svg?alt=media&token=17ac9b41-d2a8-4b8f-a774-96432659365b";

export default function MainNavbar() {
  const [authors, setAuthors] = useState([]);
  const [series, setSeries] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    db.collection("authors")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) =>
        setAuthors(
          snapshot.docs.map((doc) => ({ id: doc.id, author: doc.data() }))
        )
      );

    db.collection("series")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) =>
        setSeries(
          snapshot.docs.map((doc) => ({ id: doc.id, series: doc.data() }))
        )
      );

    db.collection("genres")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) =>
        setGenres(
          snapshot.docs.map((doc) => ({ id: doc.id, genre: doc.data() }))
        )
      );
  }, []);

  return (
    <div className="container">
      {/* main header */}

      <nav className="navbar  navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/" className="navbar-brand">
            <img
              src={LOGO_LINK || "/logo/logo.svg"}
              className="logo"
              alt="Booksbia"
              width="120"
              height="120"
            />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="nav-toggle">
            <ul className="nav-toggle__list">
              <li className="nav-toggle__item">
                <a href="/blog" target="_blank" className="nav-toggle__link">
                  Blog
                </a>
              </li>
              <li className="nav-toggle__item">
                <a href="/blog" target="_blank" className="nav-toggle__link">
                  Become a Writer
                </a>
              </li>
              <li className="nav-toggle__item">
                <div className="drop-list">
                  <a
                    className="dropdown-toggle nav-toggle__link"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Writers
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {authors.map(({ id, author }) => (
                      <li key={id}>
                        <Link href={`/authors/${author.slug}`}>
                          <a className="dropdown-item">{author.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="nav-toggle__item">
                <div className="drop-list">
                  <a
                    className="dropdown-toggle nav-toggle__link"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genre
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {genres.map(({ genre, id }) => (
                      <li key={id}>
                        <Link href={`/genres/${genre.slug}`}>
                          <a className="dropdown-item">{genre.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="nav-toggle__item">
                <div className="drop-list">
                  <a
                    className="dropdown-toggle nav-toggle__link"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Series
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {series.map(({ id, series }) => (
                      <li key={id}>
                        <Link href={`/series/${series.slug}`}>
                          <a className="dropdown-item">{series.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="nav-toggle__item">
                <Link href="/privacy-policy">
                  <a className="nav-toggle__link">Privacy Policy</a>
                </Link>
              </li>
              <li className="nav-toggle__item">
                <Link href="/terms-and-conditions">
                  <a className="nav-toggle__link">Terms And Conditions</a>
                </Link>
              </li>
              <li className="nav-toggle__item">
                <Link href="/copyright">
                  <a className="nav-toggle__link">Copyright Issue</a>
                </Link>
              </li>
              <li className="nav-toggle__item">
                <Link href="/contact">
                  <a className="nav-toggle__link">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Dropdown Header */}
      <section className="secondary">
        <div className="container">
          <div className="dropdown">
            <div className="drop-list">
              <a href="/blog" target="_blank">
                <button className="cta">Blog</button>
              </a>
            </div>
            <div className="drop-list">
              <a href="/blog" target="_blank">
                <button className="cta">Become a Writer</button>
              </a>
            </div>

            <div className="drop-list">
              <button
                className="dropdown-toggle cta"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Writers
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {authors.map(({ id, author }) => (
                  <li key={id}>
                    <Link href={`/authors/${author.slug}`}>
                      <a className="dropdown-item">{author.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="drop-list">
              <button
                className="dropdown-toggle cta"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genre
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {genres.map(({ genre, id }) => (
                  <li key={id}>
                    <Link href={`/genres/${genre.slug}`}>
                      <a className="dropdown-item">{genre.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="drop-list">
              <button
                className="dropdown-toggle cta"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Series
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                {series.map(({ id, series }) => (
                  <li key={id}>
                    <Link href={`/series/${series.slug}`}>
                      <a className="dropdown-item">{series.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
