import Link from "next/link";

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="footer__logo-box">
                <img src="/logo/logo.svg" className="footer__logo" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="container">
                <div className="footer__navigation">
                  <ul className="footer__list">
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Blog
                      </a>
                    </li>
                    <li className="footer__item">
                      <Link href="/contact">
                        <a className="footer__link">Contact Us</a>
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/copyright">
                        <a className="footer__link">Copyright Issue</a>
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/privacy-policy">
                        <a className="footer__link">Privacy Policy</a>
                      </Link>
                    </li>
                    <li className="footer__item">
                      <Link href="/terms-and-conditions">
                        <a className="footer__link">Terms And Conditions</a>
                      </Link>
                    </li>
                  </ul>
                  <div className="footer__follow-section">
                    <a
                      href="https://www.facebook.com/groups/524017418618959"
                      target="_blank"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-4">
              <p className="footer__description">
                BooksBia is a free online E-book library. We respect copyright
                issues. We have collected PDFs and links from the internet. We
                do not want any harm to copyright holders, we respect their hard
                work. We just want to make sure that those who can not afford to
                buy books can read their desired books for free. IF YOU CAN
                AFFORD TO BUY THESE BOOKS, PLEASE DO NOT DOWNLOAD EBOOKS FROM
                OUR SITE. If you are the author/publisher/copyright holder of
                any of these books published on our website, and you want to
                take down our books please inform us at{" "}
                <strong>booksbiaeditor@gmail.com</strong>, We would immediately
                remove your copyrighted materials from our site.
              </p>
            </div>
          </div>
          <div className="footer__copyright">
            <p className="footer__copyright-text">
              copyright &copy; BooksBia 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
