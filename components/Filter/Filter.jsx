import Link from "next/link";

export default function Filter({ imageUrl, name, author, slug }) {
  return (
    <div className="fil-book">
      <Link href={`/books/${slug}`}>
        <div className="content__book-link">
          <img src={imageUrl} alt={name} className="content__poster" />
          <h4 className="content__heading--sub">{name}</h4>
          <h4 className="content__heading--sub">{author}</h4>
        </div>
      </Link>
    </div>
  );
}
