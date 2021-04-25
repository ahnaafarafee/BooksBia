import Link from "next/link";

import moment from "moment";

function SideContentBooks({ imageUrl, name, author, slug, createdAt }) {
  // debugger;
  const dateCreated = createdAt;

  const date = moment(dateCreated).format("LL");

  console.log(name);

  return (
    <div>
      <Link href={`/books/${slug}`}>
        <div className="side-content__row--side">
          <div className="content__book-link">
            <div className="side-content--floating">
              <img className="content__poster" src={imageUrl} alt={name} />
              <span className="side-content__heading-side">
                <h4 className="side-content__heading--sub">{name}</h4>
                <h4 className="side-content__heading--sub">{author}</h4>
                <h3 className="side-content__heading--sub">uploaded: {date}</h3>
                {/* <h3 className="side-content__heading--sub">
                  File Size: 1.2 Mb
                </h3> */}
                {/* <h3 className="side-content__heading--sub">Rating: ⭐⭐⭐</h3> */}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SideContentBooks;
