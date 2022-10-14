import { Col, Image, Offcanvas, Row } from "react-bootstrap";
import { RiMessage2Fill } from "react-icons/ri";
import close from "../../Assets/images/close.png";

const OffCanvasComp = (props) => {
  return (
    <Offcanvas
      show={props.show}
      onHide={props.hide}
      placement="end"
      style={{ background: "#FFEFE2" }}
      className="mob-w"
    >
      <Offcanvas.Body>
        <Row className="text-end mt-3  mx-xl-1">
          <Col>
            <Image src={close} height="45px" onClick={props.onClose} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="row mx-4">
              <div className="col-1 oc-fonts me-3 mt-1 p-0">
                <RiMessage2Fill style={{ fontSize: "28px" }} />
              </div>
              <div className="col oc-fonts2 ">Lets Talk</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p
              className="para-divider"
              style={{ color: "#44243B", fontWeight: "500" }}
            >
              For more information on customization and product details. Give us
              a call or drop a message and we will revert you back.
            </p>
          </Col>
        </Row>
        <div className="offcanvas-contact-list-padding">
          <Row className="mt-5 ms-3">
            <Col>
              <p
                className="m-0"
                style={{ color: "#44243B", fontWeight: "500" }}
              >
                Whats app
              </p>
              <p>
                <a
                  href="https://wa.me/+61403260924"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "#44243B",
                    fontWeight: "500",
                  }}
                  rel="noreferrer"
                >
                  +61 403 260 924
                </a>
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3 ms-4">
              <p
                className="ms-1 mb-0"
                style={{ color: "#44243B", fontWeight: "500" }}
              >
                Call
              </p>
              <a
                href="tel:+61403260924"
                style={{
                  textDecoration: "none",
                  color: "#44243B",
                  fontWeight: "500",
                }}
                rel="noreferrer"
                className="ms-1"
              >
                +61 403 260 924
              </a>
            </Col>
          </Row>
          <Row className="mt-4 ms-3">
            <Col>
              <p
                className="m-0"
                style={{ color: "#44243B", fontWeight: "500" }}
              >
                Email
              </p>
              <a
                href="mailto:sales@divinedecores.com.au"
                style={{
                  textDecoration: "none",
                  color: "#44243B",
                  fontWeight: "500",
                }}
              >
                sales@divinedecores.com.au
              </a>
            </Col>
          </Row>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default OffCanvasComp;
