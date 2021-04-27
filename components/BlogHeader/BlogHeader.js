export default function BlogHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
}) {
  return (
    <>
      <div className="blog-detail-header">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <p className="lead mb-0">
          <img
            src={author?.image}
            className="rounded-circle mr-3"
            height="70px"
            width="70px"
            alt={author?.name}
          />
          <span className="author-name">
            {author?.name}
            {", "}
          </span>
          <em className="date">{date}</em>
        </p>
        <img
          className="img-fluid rounded img-cover"
          src={coverImage}
          alt="image"
        />
      </div>
      <style jsx>
        {`
          .author-name {
            font-weight: 700;
            fontsize: 14px;
          }

          .date {
            font-size: 10px;
            text-transform: uppercase;
            color: gray;
          }

          .title {
            text-align: center !important;
            align-items: center;
            margin-top: 15px;
            font-weight: 700;
            font-size: 30px;
          }
          .subtitle {
            text-align: center !important;
            align-items: center;
            color: gray;
            font-size: 12px;
          }
          .img-cover {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
    </>
  );
}
