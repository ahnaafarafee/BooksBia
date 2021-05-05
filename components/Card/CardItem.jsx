import Link from "next/link";

import { Card } from "react-bootstrap";

import { urlFor } from "../../services/sanity/api";

const CardItem = ({ title, subtitle, image, date, author, link }) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={author?.image || "https://i.ibb.co/nzvyrgk/default-user.png"}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">
              {author?.name || "random user"}
            </Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            src={urlFor(image).height(200).url()}
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <button className="cta">Read More</button>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
