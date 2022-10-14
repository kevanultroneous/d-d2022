import { useState } from "react";
import { Button, Col, Image, Modal, Row } from "react-bootstrap";
import close from "../../Assets/images/close.png";
import validator from "validator";
import { InquireNow } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Loader from "../common/Loader";
const Inputs = (p) => {
  return (
    <Row className="mt-4 mb-3">
      <Col xl={12}>
        <label className="fs-16 fw-600">{p.name}</label>
      </Col>
      <Col xl={12}>
        <input
          disabled={p.lock}
          value={p.value}
          onChange={p.change}
          className="in-form w-100 p-2"
          placeholder={p.placeholder}
          type={p.type}
        />
      </Col>
      <Col xl={12}>
        <label
          className="fs-16 fw-600"
          style={{ color: "#DB4242", display: p.errorshow }}
        >
          {p.error}
        </label>
      </Col>
    </Row>
  );
};
const InquireForm2 = (props) => {
  const [cs, setCs] = useState(true);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  // const [frame, setFrame] = useState('')
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [Depth, setDepth] = useState("");
  const [des, setDes] = useState("");

  const [nameE, setNameE] = useState("none");
  const [mailE, setMailE] = useState("none");
  const [numberE, setNumberE] = useState("none");
  // const [frameE, setFrameE] = useState('none')
  const [sizeE, setSizeE] = useState("none");
  const [desE, setDesE] = useState("none");
  const [loader, setLoader] = useState(false);
  const InquireApi = async () => {
    const obj = {
      name: name,
      templename: props.templename,
      email: mail,
      phone: number,
      frame: "---",
      width: "--",
      height: "--",
      depth: "--",
      description: des == "" ? "nothing" : des,
    };
    // console.log(obj);
    await InquireNow(obj)
      .then((response) => {
        // console.log(response);
        setLoader(false);
        if (response.data.status) {
          clearAll();
          return true;
        }
      })
      .catch((e) => alert(e.message));
  };
  const handleForm = () => {
    clearError();
    if (validator.isEmpty(name) || name.length <= 2) {
      setCs(true);
      setLoader(false);
      // console.log("Hello1");
      setNameE("block");
    } else if (validator.isEmpty(mail) || !validator.isEmail(mail)) {
      setCs(true);
      setLoader(false);
      // console.log("Hello2");
      setMailE("block");
    } else if (validator.isEmpty(number) || number.length <= 4) {
      setCs(true);
      setNumberE("block");
    } else {
      setLoader(false);
      InquireApi();
      navigate("/thankyou");
    }
  };
  const clearError = () => {
    setNameE("none");
    setMailE("none");
    setNumberE("none");

    setSizeE("none");
    setDesE("none");
  };
  const clearAll = () => {
    setName("");
    setMail("");
    setNumber("");
    // setFrame('')
    setHeight("");
    setWidth("");
    setDepth("");
    setDes("");
  };
  const navigate = useNavigate();
  const submitForm = () => {
    handleForm();
  };
  return (
    <Modal
      onHide={props.hide}
      show={props.showIm}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        className="p-5"
        style={{ background: "#FFEFE2", borderRadius: "12px" }}
      >
        {loader && <Loader />}
        <div className="text-end">
          <Image src={close} height={35} onClick={props.hide} />
        </div>
        <Row>
          <Col>
            <div>
              <label className="fw-700 in-from-hd">Inquire Now</label>
            </div>
            <div>
              <label className="fw-500 in-form-para">
                Please fill out the following form and we will contact you soon.
              </label>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 mb-3">
          <Col>
            <label className="fw-700 in-form-sub">{props.templename}</label>
          </Col>
        </Row>

        <Inputs
          name="Name*"
          type="text"
          error="Enter Valid Name"
          placeholder="Enter Name"
          value={name}
          change={(e) => setName(e.target.value)}
          errorshow={nameE}
        />
        <Inputs
          name="Email Address*"
          type="email"
          value={mail}
          change={(e) => setMail(e.target.value)}
          placeholder="Enter email address"
          error="Enter valid Email"
          errorshow={mailE}
        />
        <Row className="mt-4 mb-3">
          <Col xl={12}>
            <label className="fs-16 fw-600">Phone number*</label>
          </Col>
          <Col xl={12}>
            <PhoneInput
              countryCodeEditable={false}
              enableSearch={true}
              country={"au"}
              value={number}
              onChange={(phone) => setNumber(phone)}
            />
          </Col>
          <Col xl={12}>
            <label
              className="fs-16 fw-600"
              style={{ color: "#DB4242", display: numberE }}
            >
              Enter valid Phone number
            </label>
          </Col>
        </Row>
        {/* <Inputs
                    name="Frame/Pillar Number*"
                    type="text"
                    lock={true}
                    value={props.frameno}
                    placeholder="Enter Frame/Pillar Number"
                  
                /> */}

        <Row className="mt-4 mb-3">
          <Col xl={12} className="fs-16 fw-600">
            <label className="fw-700">Description</label>
          </Col>
          <Col xl={12}>
            <textarea
              value={des}
              onChange={(e) => setDes(e.target.value)}
              placeholder="Type here..."
              className="in-form p-3 w-100"
            ></textarea>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              className=" mt-3 btn btn-primary"
              onClick={() => submitForm()}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default InquireForm2;
