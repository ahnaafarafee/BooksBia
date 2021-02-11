import Head from "next/head";

function Navbar() {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          crossorigin="anonymous"
        />
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
                Read Blog
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Writers collection
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Series collection
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Become a Writer
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Terms of Use
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Contact Us
              </a>
            </li>
            <li className="nav-toggle__item">
              <a href="#" className="nav-toggle__link">
                Privacy Policy
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
                <li>
                  <a href="#">Humayun Ahmed</a>
                </li>
                <li>
                  <a href="#">Jafar Iqbal</a>
                </li>
                <li>
                  <a href="#">Sadat Hossain</a>
                </li>
                <li>
                  <a href="#">Anisul Haq</a>
                </li>
                <li>
                  <a href="#">Kazi Nazrul Islam</a>
                </li>
                <li>
                  <a href="#">Rabindranath Tagore</a>
                </li>
                <li>
                  <a href="#">Bibhutibhushan Bandopadhya</a>
                </li>
                <li>
                  <a href="#">Manik Bando padhyay</a>
                </li>
                <li>
                  <a href="#">Saratchandra Chattopadhyay</a>
                </li>
                <li>
                  <a href="#">Michael Madhusudan Dutta</a>
                </li>
              </ul>
            </div>
            <div className="drop-list">
              <button>Series</button>
              <ul>
                <li>
                  <a href="#">Himu Series</a>
                </li>
                <li>
                  <a href="#">Misir Ali Series</a>
                </li>
                <li>
                  <a href="#">Shuvro Series</a>
                </li>
                <li>
                  <a href="#">Feluda Series</a>
                </li>
                <li>
                  <a href="#">Tin Goyenda Series</a>
                </li>
                <li>
                  <a href="#">Masud Rana Series</a>
                </li>
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
