import { useEffect, useState } from "react";

import Link from "next/link";
import firebase from "../../services/firebase";

const db = firebase.firestore();

const menuContent = [
  "Read Blog",
  "Writers collection",
  "Series collection",
  "Become a Writer",
  "Terms of Use",
  "Contact Us",
  "Privacy Policy",
];

export default function Nav() {
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
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="nav-toggle">
          <ul className="nav-toggle__list">
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Blog
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
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
              <a href="#" className="nav-toggle__link">
                Privacy Policy
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Terms of use
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar  navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/" className="navbar-brand">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/booksiba-28d4a.appspot.com/o/logo.svg?alt=media&token=17ac9b41-d2a8-4b8f-a774-96432659365b"
              className="logo"
              alt="Booksbia"
              width="120"
              height="120"
            />
          </Link>
          <form className="d-flex">
            <div className="header__search-box">
              <input
                type="text"
                className="header__search"
                placeholder="type in english"
              />
              <a href="#" className="cta cta--src">
                <i className="fas fa-search"></i>
              </a>
            </div>
          </form>
        </div>
      </nav>
      {/* Dropdown Header */}
      <section className="secondary">
        <div className="container">
          <div className="dropdown">
            <div className="drop-list">
              <button className="cta">Blog</button>
            </div>
            <div className="drop-list">
              <button className="cta">Become a Writer</button>
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
