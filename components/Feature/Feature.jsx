import { useEffect } from "react";

function Feature() {
  const undraggable = () => {
    document.getElementById("img").draggable = false;
  };

  useEffect(() => {
    undraggable();
  }, []);

  return (
    <>
      <section className="feature">
        <div>
          <div className="row">
            <div className="col-lg-8">
              <div className="feature__box">
                <h3 className="feature__box--header">Are You A Writer?</h3>
                <h3 className="feature__box--header">
                  Or Do You Want To Be A Writer?
                </h3>
                <div className="feature__button">
                  <a href="#" className="cta cta-feature">
                    Write Blog
                  </a>
                  <a href="#" className="cta cta-feature">
                    Read Blog
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="feature__svg--box">
                <img
                  id="img"
                  src="https://firebasestorage.googleapis.com/v0/b/booksiba-28d4a.appspot.com/o/feature-book-svg.svg?alt=media&token=ede3340a-2813-45ab-a6cb-0551aaa457b1"
                  alt="Read and Download Books for Free"
                  className="feature__svg"
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
