import Link from "next/link";

function ErrorPage() {
  return (
    <div className="container">
      <div className="error-page">
        <span className="error-page__heading">
          Hang on
          <span>
            <img src="./svg/thinking-ios-emoji.svg" alt="🤔" />
          </span>
        </span>
        <span className="error-page__heading">You are in the wrong way!</span>
        <Link href="/" className="error-page__svg">
          <img
            className="error-page__svg--img"
            src="./svg/error-404.svg"
            alt="feature svg"
          />
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
