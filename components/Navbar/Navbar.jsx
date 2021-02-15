import Head from "next/head";

import MenuIcon from "@material-ui/icons/Menu";

const menuContent = [
  "Read Blog",
  "Writers collection",
  "Series collection",
  "Become a Writer",
  "Terms of Use",
  "Contact Us",
  "Privacy Policy",
];

const writers = [
  "Humayun Ahmed",
  "Jafar Iqbal",
  "Sadat Hossain",
  "Anisul Haq",
  "Kazi Nazrul Islam",
  "Rabindranath Tagore",
  "Bibhutibhushan Bandopaddhay",
  "Manik Bando padhyay",
  "Saratchandra Chattopadhyay",
  "Michael Madhusudan Dutta",
];

const bookSeries = [
  "Himu Series",
  "Misir Ali Series",
  "Feluda Series",
  "Tin Goyenda Series",
  "Masud Rana Series",
];

function Nav() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></script>
      </Head>
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
          <a className="navbar-brand" href="#">
            <img src="/logo/logo.svg" alt="Booksbia" width="120" height="120" />
          </a>
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
              <button className="cta">Trending</button>
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
                {writers.map((writer, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#">
                      {writer}
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
            <div className="drop-list">
              <button className="cta">Poems</button>
            </div>
            <div className="drop-list">
              <button className="cta">Horror</button>
            </div>
            <div className="drop-list">
              <button className="cta">Anubaad</button>
            </div>
            <div className="drop-list">
              <button className="cta">Detective Novels</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nav;
