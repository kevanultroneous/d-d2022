import { useEffect, useRef, useState } from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import { findId, FrameLink, sliderRes, TempleLink } from "../../common/common";
import Slider from "react-slick/lib/slider";
import InquireForm from "./InquireForm";
import rightA from "../../Assets/images/r-a.png";
import leftA from "../../Assets/images/l-a.png";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  getRelatedProducts,
  GetTempleById,
  getTemplesForLimit,
} from "../../Api/api";
import Loader from "../common/Loader";
import LabelWithChild from "../common/LabelWithChild";
import mandir2 from "../../Assets/images/ad-new-decor.png";

import mandir from "../../Assets/images/temple-adss.png";
import InquireForm2 from "./InquireForm copy";
const PersonalView = () => {
  const params = useParams();
  const sliderRef = useRef();
  // const [product_information, setProduct_information] = useState(personalViewList.information)
  // const [sliderArray, setSliderArray] = useState(personalViewList.images)
  const [selectedItm, setSelectedItem] = useState("");
  const [hItem, setHItem] = useState("");
  const [dis, setDis] = useState("none");
  const [inf, setInf] = useState(false);
  const [networkData, setNetworkData] = useState({});
  const [templename, setTemplename] = useState("");
  const [loader, setLoader] = useState(true);
  const [modalImage, setModalImage] = useState("");
  const [imageModel, setImageModel] = useState(false);
  const [typeRelated, setTypeRelated] = useState("");
  const catchId = findId(params.templeid);
  const [dval, setDval] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 500) {
        setDval("17%");
      } else {
        setDval("");
      }
    });
  });

  useEffect(() => {
    NetworkDataFetch();
    // console.log(networkData)
  }, []);
  useEffect(() => {
    // console.log("rel" + typeRelated);
    setTimeout(() => {
      TemplesApi();
    }, 1000);
  }, [typeRelated]);
  useEffect(() => {
    NetworkDataFetch();
    window.scrollTo(0, 0);
    setSelectedItem("");
    setTimeout(() => {
      TemplesApi();
    }, 1000);
    // console.log(networkData)
  }, [params]);
  const NetworkDataFetch = () => {
    GetTempleById(params.templeid)
      .then((response) => {
        setNetworkData(response.data);
        setTemplename(response.data.data.name);
        // console.log(response.data.data.type);
        setTypeRelated(response.data.data.type);
        setLoader(false);
      })
      .catch((error) => alert(error.message));
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: sliderRes,
    nextArrow: <Image src={rightA} height={200} />,
    prevArrow: <Image src={leftA} />,
  };
  // const onHoverAction = (img) => {
  //     setDis('block')
  //     setHItem(img)
  // }
  // const onHoverOutAction = () => {
  //     setDis('none')
  //     setHItem('')
  // }
  // const ModalImgV = (p) => {
  //     return (
  //         <div className="mv position-absolute m-mv" style={{ display: p.display, marginTop: p.dymicdown }}>
  //             <Image src={p.pl} height={300} />
  //         </div>
  //     )
  // }
  // related items
  const [templeData, setTempleData] = useState([]);

  const [loader2, setLoader2] = useState(true);
  const TemplesApi = () => {
    // console.log("relate " + typeRelated);
    getRelatedProducts(params.templeid, typeRelated, 1, 10)
      .then((response) => {
        setTempleData(response.data.data);
        setLoader(false);
      })
      .catch((error) => console.log("related products" + error.message));
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: sliderRes,
  };
  //   over related item
  return (
    <>
      <Modal
        size="sm"
        show={imageModel}
        onHide={() => setImageModel(false)}
        centered
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Body>
          <Image src={modalImage} height={"300px"} width={"100%"} />
        </Modal.Body>
      </Modal>
      {params.templeid === "undefined" || !params.templeid ? (
        navigate("/")
      ) : (
        <>
          {typeRelated == "temple" ? (
            <InquireForm
              templename={templename}
              showIm={inf}
              typesI={typeRelated}
              frameno={selectedItm}
              hide={() => setInf(false)}
            />
          ) : (
            <InquireForm2
              templename={templename}
              showIm={inf}
              typesI={typeRelated}
              frameno={selectedItm}
              hide={() => setInf(false)}
            />
          )}
          {loader ? (
            <Loader />
          ) : (
            <>
              {typeRelated == "temple" ? (
                <Row className="footer-back  justify-content-center mt-4 pb-1">
                  <Col
                    xs={12}
                    xl={4}
                    md={6}
                    lg={6}
                    className="d-flex m-xl-0 pt-5 pt-xl-0 pb-xl-0 pt-md-5 pb-md-5 justify-content-center"
                  >
                    <Image src={mandir} />
                  </Col>
                  <Col
                    xs={12}
                    xl={6}
                    md={6}
                    lg={6}
                    className=" mt-md-5 pt-5 pb-5 mb-3 m-xl-0"
                  >
                    <label className="text-white fw-600 fs-37 p-xl-0 ps-2">
                      Any Temple Can Be Made In Any Size
                    </label>
                    <p className="text-white fs-f-20 mt-3  p-xl-0 ps-2">
                      Temple width options 30CM/ 60cm /80cm /100cm /120cm /150cm
                      /180cm /200cm /240cm or custom width like 92cm. Height,
                      depth, colour customisable. Pine wood, Laminate boards and
                      MDF used to make temples.
                    </p>
                    <label className="text-white fs-22 fw-700  p-xl-0 ps-2">
                      Order to delivery 10-12 weeks.
                    </label>
                  </Col>
                </Row>
              ) : (
                <Row className="footer-back  justify-content-center mt-4 pb-1">
                  <Col
                    xs={12}
                    xl={4}
                    md={6}
                    lg={6}
                    className="d-flex m-xl-0 pt-5 pt-xl-0 pb-xl-0 pt-md-5 pb-md-5 justify-content-center"
                  >
                    <Image src={mandir2} />
                  </Col>
                  <Col
                    xs={12}
                    xl={6}
                    md={6}
                    lg={6}
                    className=" mt-md-5 pt-5 pb-5 mb-3 m-xl-0"
                  >
                    <label className="text-white fw-600 fs-37 p-xl-0 ps-2">
                      Lavish your home with our Home Decor Items
                    </label>
                    <p className="text-white fs-f-20 mt-3  p-xl-0 ps-2">
                      Explore our vast range of decor items including table
                      vases to wall hanging decors that splendid the beauty of
                      your home! Our all items are durable and made of the
                      finest quality. Order home decor items at the most
                      affordable prices.
                    </p>
                    {/* <label className="text-white fs-22 fw-700  p-xl-0 ps-2">
                      Order Now
                    </label> */}
                  </Col>
                </Row>
              )}
              <Row className="mt-5 mb-5 ps-xl-2 pe-xl-0 ps-2 pe-2">
                <Col xl={5} lg={5} xs={12}>
                  <Slider
                    {...settings}
                    className="mt-4 me-xl-5 ms-xl-5 mb-5 ms-md-5 me-md-5 "
                  >
                    {networkData.data.image.map((value, index) => (
                      <div className="card p-0 border-0 " key={index}>
                        <Image src={value} className="card-img-top" alt="" />
                      </div>
                    ))}
                  </Slider>
                </Col>
                <Col xs={12} xl={6} lg={6}>
                  <div className="row mt-xl-4 ms-md-2">
                    <div className="col-12 ms-md-4">
                      <label className="p-font">{networkData.data.name}</label>
                    </div>
                    <div className="col-12 ms-md-4">
                      <p className="p-font-sub">
                        {"$" + networkData.data.price}
                      </p>
                    </div>
                    {/* <div className="col-12">
                                                    <p className="p-font-sub2">Available :
                                                        <span style={{ color: '#EB8E88' }}>{networkData.data.stock == "Yes" ? " In Stock" : " Out of Stock"}</span> </p>
                                                </div> */}
                    <div className="col-12 ms-md-4">
                      <p className="p-sub-para w-100">
                        {networkData.data.information}
                      </p>
                    </div>
                  </div>
                  {/* <ModalImgV pl={hItem} display={dis} dymicdown={dval} /> */}
                  {/* <p style={{ color: '#44233B' }} className="fw-700 ms-md-3 mt-md-3">Select your Frame/Pillar</p> */}
                  {/* <div className="row ms-xl-3 ms-3 mt-5 ">
                                                {networkData.doc.map((v, i) =>
                                                    <Col xl={2}
                                                        xs={4} md={2} className="p-0" key={i}>
                                                        <label
                                                            onClick={()=>{
                                                                setImageModel(true)
                                                                setModalImage(v.frameimage)
                                                            }}
                                                            // onMouseLeave={() => onHoverOutAction()}
                                                            // onMouseEnter={() => onHoverAction(v.frameimage)}
                                                            >
                                                            <input
                                                                type="radio"
                                                                name="test"
                                                                value={v.framename}
                                                                onChange={(e) =>
                                                                    setSelectedItem(e.target.value)
                                                                } />
                                                            <Image
                                                                src={v.frameimage}
                                                                height={88}
                                                                width={82.43} />
                                                            <p className="text-center fw-400 fs-12 mt-3">{v.framename}</p>
                                                        </label>
                                                    </Col>
                                                )}
                                            </div> */}
                  <Row className="mt-5 mb-5 me-xl-5 ms-xl-4 ms-0  ms-md-2 ps-0">
                    <Col className="p-0 ms-md-4">
                      <label className="fw-bold list-font ">
                        Product Information
                      </label>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: networkData.data.productInformation,
                        }}
                      />
                    </Col>
                  </Row>
                  <div className="row justify-content-center">
                    <div className="d-flex justify-content-center justify-content-xl-start ps-xl-5">
                      <Button
                        className=" mt-3 btn btn-primary ms-xl-3 "
                        // disabled={selectedItm ? false : true}
                        onClick={() => setInf(true)}
                      >
                        Inquire Now
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <LabelWithChild
                title="You Might also Like"
                next={() => sliderRef.current.slickPrev()}
                prev={() => sliderRef.current.slickNext()}
              />
              <Row className="justify-content-center">
                <Col xl={12} md={12} lg={12}>
                  <Slider
                    {...settings2}
                    ref={sliderRef}
                    className="mt-4 me-xl-5 ms-xl-5 me-md-5 ms-md-5 mb-5"
                  >
                    {templeData.map((value, index) => (
                      <Link to={`/viewitem/${value._id}`}>
                        <div className="card p-0 border-0 w-75 w-xl-100 w-md-100">
                          {/* {console.log(value.image[0])} */}
                          <Image
                            src={value.image[0]}
                            className="card-img-top"
                          />

                          <div
                            className="card-img-overlay overlay overlay-m"
                            style={{ justifyContent: "normal" }}
                          >
                            <div className="row">
                              <div className="col-8 col-xl-8 col-lg-8 col-md-8 col-xs-6 position-absolute bottom-0 mb-2 text-white fw-700 fs-15">
                                {value.name}
                              </div>
                              <div className="col-4 col-xl-4 col-lg-4 col-md-4  position-absolute bottom-0 end-0 text-end mb-2 text-white fw-700 fs-15 ps-0">
                                ${value.price}
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
      )}
    </>
  );
};
export default PersonalView;
