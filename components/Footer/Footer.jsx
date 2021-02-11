import React from "react";

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4 offset-md-4">
              <div class="footer__logo-box">
                <img
                  src="./assets/BooksBia Logo.svg"
                  alt="BooksBia Logo"
                  class="footer__logo"
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="container">
                <div class="footer__navigation">
                  <ul class="footer__list">
                    <li class="footer__item">
                      <a href="#" class="footer__link">
                        Blog
                      </a>
                    </li>
                    <li class="footer__item">
                      <a href="#" class="footer__link">
                        Contact Us
                      </a>
                    </li>
                    <li class="footer__item">
                      <a href="#" class="footer__link">
                        Donate
                      </a>
                    </li>
                    <li class="footer__item">
                      <a href="#" class="footer__link">
                        Privacy Policy
                      </a>
                    </li>
                    <li class="footer__item">
                      <a href="#" class="footer__link">
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                  <div class="footer__follow-section">
                    <a
                      href="https://facebook.com/ahnaaf.a.rafee"
                      target="_blank"
                    >
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://twitter.com/ahnaaf_al" target="_blank">
                      <i class="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://instagram.com/__ahnaaf" target="_blank">
                      <i class="fab fa-instagram-square"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank">
                      <i class="fab fa-youtube-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 offset-md-4">
              <p class="footer__description">
                BooksBia is a online Bengali books reading library. You can
                download all Bangla books in pdf. We've got a large Bengali
                ebook collection for all of you. Visit our site regularly to
                download your desire Bangla PDF Books.
              </p>
            </div>
          </div>
          <div class="footer__copyright">
            <p class="footer__copyright-text">
              copyright &copy; BooksBia 2021. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
