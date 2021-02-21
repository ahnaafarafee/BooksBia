import Link from "next/link";

function NotFoundPage() {
  return (
    <>
      <div className="error-page">
        <span className="error-page__heading">Oooops!</span>
        <Link href="/" className="error-page__svg">
          <img
            className="error-page__svg--img"
            src="./svg/error-404.svg"
            alt="feature svg"
          />
        </Link>
        <span className="error-page__heading">
          This page page cannot be found 😞
        </span>
      </div>
    </>
  );
}

export default NotFoundPage;
