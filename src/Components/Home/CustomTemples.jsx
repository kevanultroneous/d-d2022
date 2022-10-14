import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getTemplesForLimit, getTemplesPagignate } from "../../Api/api";
import Loader from "../../Components/common/Loader";
import { TempleLink } from "../../common/common";
import LabelOfContent from "../common/LabelOfContent";
import ProductCard from "../Products/ProductCard";
const CustomTemples = () => {
  const navigate = useNavigate();
  // const [templeData,setTempleData] = useState([])
  // const [loader,setLoader] = useState(true)
  const [templeData, setTempleData] = useState([]);
  const [page, setPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);
  const [btnS, setBtnS] = useState("");
  const [loader, setLoader] = useState(true);
  const [currentTotal, setCurrentTotal] = useState(0);
  useEffect(() => {
    TemplesApi();
  }, []);
  const TemplesApi = async () => {
    await getTemplesPagignate(page, "temple", 4)
      .then((response) => {
        setDataCount(response.data.total_documents);
        setTempleData(response.data.data);
        setLoader(false);
        // console.log(response.data.data.length);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const SeeMore = () => {
    setPage(page + 1);
  };
  useEffect(() => {
    getTemplesPagignate(page, "temple", 4)
      .then((response) => setTempleData(templeData.concat(response.data.data)))
      .catch((error) => alert(error));
  }, [page]);

  return (
    <div className="Paddings-Top-Contain PTC PTCM">
      <LabelOfContent title={"Custom Temples"} />
      <Row className="justify-content-center mx-lg-5">
        {loader ? (
          <Loader />
        ) : (
          templeData.map((value, index) => (
            <ProductCard
              iditem={value._id}
              key={index}
              image={value.image[0]}
              name={value.name}
              price={value.price}
            />
          ))
        )}
      </Row>
      {templeData.length > 0 ? (
        <Row className="text-center mt-5">
          <Col lg="12">
            <div
              className="btn btn-primary"
              onClick={() => navigate("temples")}
            >
              View All
            </div>
          </Col>
        </Row>
      ) : null}
      {/* <Row className="text-center mt-5">
        <Col lg="12">
          <div
            className="btn btn-primary"
            onClick={() => SeeMore()}
            style={{ display: templeData.length === dataCount ? "none" : "" }}
          >
            View All
          </div>
        </Col>
      </Row> */}
    </div>
  );
};
export default CustomTemples;
