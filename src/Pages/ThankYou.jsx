import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import heart from "../Assets/images/heart.png";
const ThankYou = () => {
  return (
    <Container
      fluid
      style={{ background: "#FFEFE2", height: "100vh" }}
      className="parent"
    >
      <Row className="justify-content-center child">
        <div className="d-flex justify-content-center">
          <Image src={heart} className="text-center" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="fw-600 fs-1 text-center thks">Thank You</div>
        </div>
        <div className="d-flex justify-content-center">
          <p className="text-center fw-500 thks-p">
            We have received your request. Our team will get back to you soon
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/" style={{ color: "#DB4242" }}>
            Go Back to home
          </Link>
        </div>
        <Col xl={12} xs={12} className="mt-5"></Col>
        <Col xl={12} xs={12} className="mt-5"></Col>
        <Col xl={12} className="text-center"></Col>
      </Row>
    </Container>
  );
};
export default ThankYou;
