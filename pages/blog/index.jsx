import { Container, Row, Col } from "react-bootstrap";
import CardItem from "../../components/Card/CardItem";
import CardListItem from "../../components/Card/CardListItem";

export default function Blog() {
  return (
    <Container>
      <div className="blog-detail-page">
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              <CardListItem />
            </Col>
            <Col md="4">
              <CardItem />
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  );
}
