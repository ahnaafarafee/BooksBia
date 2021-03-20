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

const bookSeries = [
  "Himu Series",
  "Misir Ali Series",
  "Feluda Series",
  "Tin Goyenda Series",
  "Masud Rana Series",
];

const genres = [
  "Novels",
  "Detective",
  "Poem",
  "Adventure",
  "Story books",
  "English Language Books",
];

export default function Nav() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    db.collection("authors").onSnapshot((snapshot) =>
      setAuthors(
        snapshot.docs.map((doc) => ({ id: doc.id, author: doc.data() }))
      )
    );
  }, []);

  return (
    <div>
      {/* main header */}
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="nav-toggle">
          <ul className="nav-toggle__list">
            {menuContent.map((menu, index) => (
              <li className="nav-toggle__item" key={index}>
                <a href="#" className="nav-toggle__link">
                  {menu}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav className="navbar  navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/" className="navbar-brand">
            <img
              src="/logo/logo.svg"
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
                    <Link href={`authors/${author.slug}`}>
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
                {genres.map((genre, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {genre}
                    </a>
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
                {bookSeries.map((series, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {series}
                    </a>
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
