import { useEffect, useRef, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick/lib/slider";
import slugify from "slugify";
import { getTemplesForLimit } from "../../Api/api";
import { sliderRes, TempleLink } from "../../common/common";
import LabelWithChild from "../common/LabelWithChild";
import Loader from "../common/Loader";

const RelatedItem = () => {
  const sliderRef = useRef();

  const [templeData, setTempleData] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    TemplesApi();
  }, []);
  const TemplesApi = () => {
    getTemplesForLimit()
      .then((response) => {
        setTempleData(response.data.data);
        setLoader(false);
      })
      .catch((error) => alert(error.message));
  };
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
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <LabelWithChild
            title="You Might also Like"
            next={() => sliderRef.current.slickPrev()}
            prev={() => sliderRef.current.slickNext()}
          />

          <Row className="justify-content-center">
            <Col xl={12} md={12} lg={12}>
              <Slider
                {...settings}
                ref={sliderRef}
                className="mt-4 me-xl-5 ms-xl-5 me-md-5 ms-md-5 mb-5"
              >
                {templeData.map((value, index) => (
                  <Link to={`/viewitem/${value._id}`}>
                    <div className="card p-0 border-0 w-75 w-xl-100 w-md-100">
                      {/* {console.log(value.image[0])} */}
                      <Image src={value.image[0]} className="card-img-top" />
                      <div
                        className="card-img-overlay overlay overlay-m"
                        style={{ justifyContent: "normal" }}
                      >
                        <div className="row">
                          <div className="col-8 col-xl-8 col-lg-8 col-md-8 col-xs-6 position-absolute bottom-0 mb-2 text-white fw-700 fs-15">
                            {value.name}
                          </div>
                          <div className="col-4 col-xl-4 col-lg-4 col-md-4  position-absolute bottom-0 end-0 text-end mb-2 text-white fw-700 fs-15 ps-0">
                            {value.price}$
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </Slider>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default RelatedItem;
