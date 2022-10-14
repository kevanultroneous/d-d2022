import {
  Col,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Row,
} from "react-bootstrap";
import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../../Assets/images/icon.png";
import call from "../../Assets/images/call.png";
import OffCanvasComp from "./OffCanvasComp";
import { Link } from "react-router-dom";
import menu from "../../Assets/images/menu.png";
import close from "../../Assets/images/close.png";
import { MyUrl } from "../../common/common";

const DivineNavbar = () => {
  const [show, setShow] = useState(false);
  const [chngClr, setChmgClr] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const [offC, setOffc] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const changeNavbarColor = () => {
    if (navExpanded) {
      setNavExpanded(false);
    }
    if (window.scrollY >= 80) {
      setChmgClr(true);
    } else {
      setChmgClr(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <>
      <Image src={call} id="myBtn" onClick={() => setShow(true)} />
      <Offcanvas
        show={offC}
        onHide={() => setOffc(false)}
        placement="end"
        style={{ width: "250px", background: "#FFEFE2" }}
      >
        <Offcanvas.Body>
          <Row className="text-end mt-3 ">
            <Col>
              <Image src={close} height="30px" onClick={() => setOffc(false)} />
            </Col>
          </Row>
          <div className="mt-5 pt-3">
            <Nav.Link
              onClick={() => window.scroll(0, 0)}
              href="/"
              style={{ fontSize: "20px" }}
              className="nav-link-clr me-xl-5 me-md-5 me-lg-5 fw-bold"
            >
              Home
            </Nav.Link>
            <Link to="/temples" className="text-decoration-none">
              <Nav.Link
                onClick={() => window.scroll(0, 0)}
                href="/temples"
                style={{ fontSize: "20px" }}
                className="me-xl-5 me-md-5 me-lg-5 fw-bold"
              >
                Temples
              </Nav.Link>
            </Link>
            <Link to="/decor" className="text-decoration-none">
              <Nav.Link
                onClick={() => window.scroll(0, 0)}
                href="/decor"
                style={{ fontSize: "20px" }}
                className="me-xl-5 me-md-5 me-lg-5 fw-bold"
              >
                Decor
              </Nav.Link>
            </Link>
            <Nav.Link
              href={`${MyUrl}#about`}
              style={{ fontSize: "20px" }}
              className="pt-xl-0 pt-lg-0 fw-bold"
            >
              About Us
            </Nav.Link>

            <div className="facebok-instas">
              <Nav.Link
                href="https://www.facebook.com/divinedecores/ "
                className="fs-20 pe-3"
                target="_blank"
              >
                <FaFacebookF />
              </Nav.Link>

              <Nav.Link
                href="https://www.instagram.com/divinedecores/"
                className="fs-20 pt-0 ps-0"
                target="_blank"
              >
                <AiFillInstagram style={{ fontSize: "34px" }} />
              </Nav.Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Navbar
        onToggle={() => setOffc(true)}
        expand="lg"
        expanded={navExpanded}
        style={{ background: chngClr ? "#FFEFE2" : "none", transition: "0.5s" }}
        fixed="top"
      >
        <Container
          fluid
          className="p-xl-3 ps-md-5 pe-md-5 p-lg-3 p-3 mobile-nav-padding"
        >
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand
              onClick={() => window.scroll(0, 0)}
              href="#"
              className="ms-md-1 ms-xs-1 ms-xl-5 ms-lg-5 ms-1"
            >
              <Image src={logo} className="icon-size" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" className="border-none">
            <Image src={menu} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 nav-fonts" navbarScroll>
              <Link to="/" className="text-decoration-none link-a-nav">
                <Nav.Link
                  onClick={() => window.scroll(0, 0)}
                  href="/"
                  className="nav-link-clr me-xl-5 me-md-5 me-lg-5"
                >
                  Home
                </Nav.Link>
              </Link>
              <NavDropdown
                onMouseEnter={() => setDropDown(true)}
                onMouseLeave={() => setDropDown(false)}
                title="Products"
                id="basic-nav-dropdown"
                className="pe-3 ps-0 pe-xl-4 pe-md-3"
                show={dropDown}
              >
                <NavDropdown.Item onClick={() => window.scroll(0, 0)}>
                  <Link to="/temples">Temples</Link>
                </NavDropdown.Item>

                <NavDropdown.Item onClick={() => window.scroll(0, 0)}>
                  <Link to="/decor">Decor</Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href={`${MyUrl}#about`} className="pt-xl-0 pt-lg-0">
                About Us
              </Nav.Link>
              <div className="vector ms-5" />

              <Nav.Link
                href="https://www.facebook.com/divinedecores/ "
                className="fs-20 ps-4 pe-xl-3 pes-0 pt-0"
                target="_blank"
              >
                <FaFacebookF style={{ height: "21px" }} />
              </Nav.Link>

              <Nav.Link
                href="https://www.instagram.com/divinedecores/"
                className="fs-20 ps-0  pe-4 pd-r pt-0"
                target="_blank"
              >
                <AiFillInstagram />
              </Nav.Link>

              <div className="vector me-5 ms-2" />
              <Nav.Link
                onClick={() => setShow(true)}
                className="p-0 me-xl-5"
                id="call-tab-mob"
              >
                <Image src={call} height="45" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <OffCanvasComp
        show={show}
        hide={() => handleClose()}
        onClose={() => handleClose()}
      />
    </>
  );
};
export default DivineNavbar;
