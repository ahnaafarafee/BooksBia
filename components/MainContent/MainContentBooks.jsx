import Link from "next/link";

function MainContentBooks({ imageUrl, name, author }) {
  return (
    <>
      <div className="content__row--books">
        <Link href="/">
          <div className="content__book-link">
            <img src={imageUrl} alt={name} className="content__poster" />
            <h4 className="content__heading--sub">{name}</h4>
            <h4 className="content__heading--sub">{author}</h4>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MainContentBooks;
