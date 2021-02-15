import React from "react";

function Footer() {
  return (
    <div className="container">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="footer__logo-box">
                <img
                  src="./logo/logo.svg"
                  alt="BooksBia Logo"
                  className="footer__logo"
                />
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
                      <a href="#" className="footer__link">
                        Contact Us
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Donate
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="footer__item">
                      <a href="#" className="footer__link">
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                  <div className="footer__follow-section">
                    <a
                      href="https://facebook.com/ahnaaf.a.rafee"
                      target="_blank"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/ahnaaf_al" target="_blank">
                      <i className="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://instagram.com/__ahnaaf" target="_blank">
                      <i className="fab fa-instagram-square"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank">
                      <i className="fab fa-youtube-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-md-4">
              <p className="footer__description">
                BooksBia is a online Bengali books reading library. You can
                download all Bangla books in pdf. We've got a large Bengali
                ebook collection for all of you. Visit our site regularly to
                download your desire Bangla PDF Books.
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
