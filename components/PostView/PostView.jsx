import { urlFor } from "../../services/sanity/api";
import Link from "next/link";

export default function PostView({ categories }) {
  return (
    <>
      <h1 className="main-title">You may also like</h1>
      <div className="post-view-container">
        {categories.map((item, index) => {
          if (index < 5) {
            return (
              <div key={index} className="post-view">
                <div className="post-img">
                  <img
                    className="cover-img"
                    src={urlFor(item.coverImage).height(200).url()}
                    alt="cover image"
                  />
                </div>
                <div className="post-details">
                  <h1 className="post-title">{item.title}</h1>
                  <p className="post-description">
                    {item.body[0].children[0].text}
                  </p>
                  <Link href={item.slug}>
                    <a className="post-link">
                      Read More
                      <i
                        style={{ cursor: "pointer", marginLeft: "3px" }}
                        className="fas fa-arrow-right"
                      ></i>
                    </a>
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
      <style jsx>{`
        .post-view {
          margin-top: 40px;
          display: flex;
        }

        @media only screen and (max-width: 991px) {
          .post-view {
            flex-direction: column;
          }
        }

        .post-details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 30px;
        }

        @media only screen and (max-width: 991px) {
          .post-details {
            margin-top: 20px;
            margin-left: 0;
          }
        }

        .post-title {
          font-size: 2rem;
          font-weight: 600;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
