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
            <img src="./svg/thinking-ios-emoji.svg" id="img" alt="🤔" />
          </span>
        </span>
        <span className="error-page__heading">You are in the wrong way!</span>
        <Link href="/" className="error-page__svg">
          <img
            className="error-page__svg--img"
            id="img2"
            src="./svg/error-404.svg"
            alt="feature svg"
          />
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
