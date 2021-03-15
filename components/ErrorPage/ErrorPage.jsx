import Link from "next/link";
import { useEffect } from "react";

function ErrorPage() {
  const undraggable = () => {
    document.getElementById("img").draggable = false;
  };

  const undraggable2 = () => {
    document.getElementById("img2").draggable = false;
  };

  useEffect(() => {
    undraggable();
    undraggable2();
  }, []);

  return (
    <div className="container">
      <div className="error-page">
        <span className="error-page__heading">
          Hang on
          <span>
            <img
              id="img"
              src="https://firebasestorage.googleapis.com/v0/b/booksiba-28d4a.appspot.com/o/thinking-ios-emoji.svg?alt=media&token=6c0189cf-7aa7-43a6-bb06-585b2e0ee6a7"
              alt="🤔"
            />
          </span>
        </span>
        <span className="error-page__heading">You are in the wrong way!</span>
        <Link href="/" className="error-page__svg">
          <img
            className="error-page__svg--img"
            id="img2"
            // src="./svg/error-404.svg"
            src="https://firebasestorage.googleapis.com/v0/b/booksiba-28d4a.appspot.com/o/error-404.svg?alt=media&token=59a2715f-bf7d-4380-9835-13de18c377bd"
            alt="feature svg"
          />
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
