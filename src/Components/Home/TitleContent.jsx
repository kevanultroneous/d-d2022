import { useState, useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const TitleContent = (props) => {
  const [dynamic, setDynamic] = useState(false);

  // console.log("hry");
  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 1080
      ? setDynamic(true)
      : setDynamic(false);
  });

  return (
    <Row className="back-image under-content">
      <Col
        lg={6}
        xl={4}
        md={8}
        xs={12}
        className="ms-md-5  m-0 me-xl-5 Padding-Title Title-Space"
        style={dynamic ? { display: "none" } : null}
      >
        <div className="title-level-1 fw-500 p-0">Decor Home with</div>
        <div className="title-level-2 fw-700">Spiritual Diviness</div>
        <div className="title-level-3 fw-500 me-xl-5 me-xs-0">
          <p className="mt-3">
            Celebrate the journey of Peacefulness, Holiness, Mysticism &
            Religiosity with our handcrafted Temples & Decors.
          </p>
        </div>
        <Link to="/temples">
          <div className="btn btn-primary mt-3">Our Products</div>
        </Link>
      </Col>
    </Row>
  );
};
export default TitleContent;
