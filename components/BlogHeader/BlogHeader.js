import SocialShare from "../../components/SocialShare/SocialShare";

export default function BlogHeader({
  title,
  subtitle,
  coverImage,
  date,
  author,
  minutes,
}) {
  return (
    <>
      <div className="blog-detail-header">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        {minutes && (
          <span className="reading-time">{minutes} minutes read </span>
        )}

        <p className="lead mb-0">
          <img
            src={author?.image || "https://i.ibb.co/nzvyrgk/default-user.png"}
            className="rounded-circle mr-3 auth-img"
            height="50px"
            width="50px"
            alt={author?.name || "random user"}
          />
          <span className="author-name">
            by <b>{author?.name}</b>
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
            // font-weight: 700;
            fontsize: 15px;
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
            font-size: 20px;
          }
          .img-cover {
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .reading-time {
            font-weight: 700;
            fontsize: 18px;
            border-bottom: 1px solid #e0e0e0;
          }
          .auth-img {
            margin-top: 20px;
          }
        `}
      </style>
    </>
  );
}
