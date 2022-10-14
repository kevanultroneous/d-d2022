import { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import { ListForSlider, sliderRes } from "../../common/common";
import CardForTesti from "../Products/CardForTesti";
import LabelWithChild from "../common/LabelWithChild";
const TestiMonial = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: sliderRes,
  };
  return (
    <div className="Paddings-Top-Contain">
      <LabelWithChild
        title="Testimonials"
        next={() => sliderRef.current.slickPrev()}
        prev={() => sliderRef.current.slickNext()}
      />
      <Row>
        <Col xl="12">
          <div className="title-of-testi ms-xl- 5 ms-md-5  me-md-5 ps-2 ms-2">
            What our customer say about us.
          </div>
        </Col>
      </Row>
      <Row className="mx-0">
        <Col
          xl={12}
          xs={12}
          md={12}
          className="mt-4 mb-5 testi-card-side-padding"
        >
          <Slider {...settings} ref={sliderRef}>
            {ListForSlider.map((v, i) => (
              <CardForTesti
                key={i}
                username={v.username}
                user={v.icon}
                star={v.rating}
                paragraph={v.paragraph}
              />
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};
export default TestiMonial;
