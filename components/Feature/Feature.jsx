function Feature() {
  return (
    <>
      <section class="feature">
        <div class="">
          <div class="row">
            <div class="col-lg-8">
              <div class="feature__box">
                <h3 class="feature__box--header">Are You A Writer?</h3>
                <h3 class="feature__box--header">
                  Or Do You Want To Be A Writer?
                </h3>
                <div class="feature__button">
                  <a href="#" class="cta cta-feature">
                    Write Blog
                  </a>
                  <a href="#" class="cta cta-feature">
                    Read Blog
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="feature__svg--box">
                <img
                  src="./assets/feature-book-svg.svg"
                  alt="feature svg"
                  class="feature__svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
