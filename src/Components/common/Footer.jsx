import { Col, FormControl, Image, InputGroup, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import image from "../../Assets/images/icon2.png";
import { Link } from "react-router-dom";
import { MyUrl } from "../../common/common";
import loved from "../../Assets/images/loved-ult.gif";
const Footer = () => {
  return (
    <>
      <Row className="footer-back p-5 justify-content-center footer-padding">
        <Col lg="3" xl="3" md="5">
          <div>
            <Image src={image} />
            <p className="text-white mt-3 fw-500">
              39C, Mandoon Road,
              <br />
              Girraween, NSW-2145
              <br />
              +61 403 260 924
              <br />
              <a
                href="mailto:sales@divinedecores.com.au"
                className="link-styles"
              >
                sales@divinedecores.com.au
              </a>
            </p>
          </div>
        </Col>
        <Col lg="3" xl="3" sm="12" md="5" className="text-white mt-3 mb-3">
          <div className="fw-700">
            <a href={`${MyUrl}#about`} className="link-styles">
              About Us
            </a>
          </div>
          {/* <div className="fw-700 mt-xl-3 mt-3">
        <Link to="/">
          Contact Us
          </Link>
          </div> */}
          <div className="fw-700 mt-xl-2 mt-3 Terms-condition">
            <Link
              to="/terms-and-conditions"
              className="link-styles"
              rel="noreferrer"
            >
              Terms & Conditions
            </Link>
          </div>
        </Col>
        <Col lg="3" xl="3" sm="12" md="5" className="text-white mt-3 mb-3 ">
          <div className="row">
            <div className="col-xl-2 col-1 text-xl-end ">
              <FaFacebookF style={{ fontSize: "20px" }} />
            </div>
            <div className="col-xl-2 col-6 fw-700">
              <a
                href="https://www.facebook.com/divinedecores/"
                target="_blank"
                className="link-styles"
                rel="noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-xl-2 col-1 text-xl-end">
              <AiFillInstagram style={{ fontSize: "20px" }} />
            </div>
            <div className="col-xl-2  col-6 fw-700 ">
              <a
                href="https://www.instagram.com/divinedecores/"
                target="_blank"
                className="link-styles"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </Col>
        <Col lg="3" xl="3" xs="12" md="5" className="text-white mt-3">
          <div className="fw-700">
            &copy; All Right Reserved by Divine Decores
          </div>
          {/* <InputGroup className="mb-3 mt-3 w-100">
          <FormControl
          className="email-input text-white"
          placeholder="Email Address"
          aria-label="Email Address"
          aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2 " className="email-btn">Subscribe</InputGroup.Text>
        </InputGroup> */}
        </Col>
        <Col
          xl={12}
          xs={12}
          sm={12}
          className="text-center fw-bold text-white mt-3 mb-3"
        >
          Crafted with&nbsp;
          <Image src={loved} height={26} className="pb-1" />
          &nbsp;from&nbsp;
          <a
            href="https://ultroneous.com/"
            target="_blank"
            className="loved-link "
          >
            ultroNeous Technologies
          </a>
        </Col>
      </Row>
    </>
  );
};
export default Footer;
