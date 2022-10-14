import { Col, Container, Row } from "react-bootstrap";
import AboutUs from "../Components/Home/AboutUs";
import CustomTemples from "../Components/Home/CustomTemples";
import Footer from "../Components/common/Footer";
import TestiMonial from "../Components/Home/TestiMonial";
import TitleContent from "../Components/Home/TitleContent";
import DivineNavbar from "../Components/common/Navbar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import CustomDecor from "../Components/Home/CustomDecor";
const MainPage = () => {
  const [dynamic1, setDynamic1] = useState(false);

  useEffect(() => {
    window.innerWidth >= 320 && window.innerWidth <= 1080
      ? setDynamic1(true)
      : setDynamic1(false);
    // console.log(window.location.origin);
  });

  return (
    <>
      <DivineNavbar />
      <Container fluid className="back-contain">
        <TitleContent />
        {dynamic1 ? (
          <Row>
            <Col
              lg={6}
              xl={4}
              md={8}
              xs={12}
              className="ms-md-5  m-0 me-xl-5 Padding-Title Title-Space mobile-padding"
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
        ) : null}
        <CustomTemples />
        <CustomDecor />
        <div id="about">
          <AboutUs />
        </div>
        <TestiMonial />
        <Footer />
      </Container>
    </>
  );
};
export default MainPage;
