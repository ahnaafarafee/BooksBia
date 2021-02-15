// import Link from "next/link";

function MainContentBooks({ imageUrl, name, author }) {
  return (
    <>
      <div className="content__row--books">
        <a href="/" className="content__book-link">
          <img src={imageUrl} alt="book" className="content__poster" />
          <h4 className="content__heading--sub">{name}</h4>
          <h4 className="content__heading--sub">{author}</h4>
        </a>
      </div>
    </>
  );
}

export default MainContentBooks;
