import { Col, Image, Row } from "react-bootstrap";
import rightArrow from "../../Assets/images/right.svg";
import leftArrow from "../../Assets/images/left.svg";

const LabelWithChild = (props) => {
  return (
    <Row className="ms-xs-5 ms-xl-5 ms-md-5 ms-lg-5 ms-1">
      <Col lg="6" md={7} xl={6} className="mt-xl-5 mt-xs-0 mb-3 p-0">
        <label className="label-text ms-2">{props.title}</label>
        <div className="border-label ms-2"></div>
      </Col>
      <Col
        xs={12}
        xl={6}
        md={4}
        className="mt-xl-5 mt-xs-3 mb-3 text-xl-end text-md-end  ml-xl-6 ms-0 p-0 actions-btn"
      >
        <div className="me-xl-5">
          <Image
            src={leftArrow}
            onClick={props.next}
            width={49}
            className=" me-xl-4 me-4 "
          />
          <Image
            src={rightArrow}
            onClick={props.prev}
            width={49}
            className="me-xl-3"
          />
        </div>
      </Col>
    </Row>
  );
};
export default LabelWithChild;
