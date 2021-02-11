import Head from "next/head";

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

function Navbar() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"
        />
      </Head>
      {/* main header */}
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="nav-toggle">
          <ul className="nav-toggle__list">
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                {menuContent.map((menu) => {
                  menu;
                })}
              </a>
            </li>
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
              <button>Blog</button>
            </div>
            <div className="drop-list">
              <button>Trending</button>
            </div>

            <div className="drop-list">
              <button>Writers</button>
              <ul>
                {writers.map((writer) => (
                  <li>
                    <a href="#">{writer}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="drop-list">
              <button>Series</button>
              <ul>
                {bookSeries.map((series) => (
                  <li>
                    <a href="#">{series}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="drop-list">
              <button>Poems</button>
            </div>
            <div className="drop-list">
              <button>Horror</button>
            </div>
            <div className="drop-list">
              <button>Anubaad</button>
            </div>
            <div className="drop-list">
              <button>Detective Novels</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
