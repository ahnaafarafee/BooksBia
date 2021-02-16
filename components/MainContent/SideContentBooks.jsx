import Link from "next/link";

function SideContentBooks({ imageUrl, name, author }) {
  return (
    <div>
      <Link href="/">
        <a className="content__book-link">
          <div className="side-content--floating">
            <img src={imageUrl} alt="book" className="content__poster" />
            <span className="side-content__heading-side">
              <h4 className="side-content__heading--sub">{name}</h4>
              <h4 className="side-content__heading--sub">{author}</h4>
              {/* <h3 className="side-content__heading--sub">File Size: 1.2 Mb</h3>
            <h3 className="side-content__heading--sub">Uploaded: 24.01.20</h3>
            <h3 className="side-content__heading--sub">Rating: ⭐⭐⭐</h3> */}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default SideContentBooks;