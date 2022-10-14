import { Card, Col, Image, Row } from "react-bootstrap";
import comma from "../../Assets/images/comma.png";
import ReactStars from "react-rating-stars-component";
import "./../../Assets/css/Testimonial.css";
const CardForTesti = (props) => {
  return (
    <Card
      style={{ background: "#FFEFE2" }}
      className="testi-card-padding own-shadow testimonial ms-xl-5 ms-1 me-1 me-xl-5 ms-md-3 me-md-3 card-border border-0 shadow mt-3 mb-4 pt-3 ps-2 pb-3 pe-2 p-md test-height"
    >
      <Card.Body className="h-100">
        <Card.Title>
          <Image src={comma} />
        </Card.Title>
        <Card.Text className="pt-4 Paragraph-size">{props.paragraph}</Card.Text>
      </Card.Body>
      <Card.Footer className="border-0 bg-transparent">
        <Row>
          <Col xl={3} xs={4} md={2} lg={6} className="userProfile">
            <Image src={props.user} className="User-Img" />
          </Col>
          <Col xl={9} xs={8} md={8} lg={6}>
            <Row>
              <Col xl={12} xs={12} md={12} lg={12}>
                <label className="carousel-label mb-0">{props.username}</label>
              </Col>
            </Row>
            <Row>
              <Col xl={12} xs={12} md={12} lg={12}>
                <ReactStars
                  edit={false}
                  value={props.star}
                  size={25}
                  classNames="carousel-star"
                  isHalf={true}
                  activeColor="#FF7A00"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default CardForTesti;
