import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getDivinePagignate, getTemplesPagignate } from "../Api/api";
import { TempleLink } from "../common/common";
import Footer from "../Components/common/Footer";
import LabelOfContent from "../Components/common/LabelOfContent";
import Loader from "../Components/common/Loader";
import DivineNavbar from "../Components/common/Navbar";
import ProductCard from "../Components/Products/ProductCard";

const DecorPage = () => {
  const [templeData, setTempleData] = useState([]);
  const [page, setPage] = useState(1);
  const [dataCount, setDataCount] = useState(0);
  const [btnS, setBtnS] = useState("");
  const [loader, setLoader] = useState(true);
  const [currentTotal, setCurrentTotal] = useState(0);
  useEffect(() => {
    TemplesApi();
    window.scrollTo(0, 0);
  }, []);
  const TemplesApi = async () => {
    await getDivinePagignate(page, "decor", 8)
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
    getDivinePagignate(page, "decor", 8)
      .then((response) => setTempleData(templeData.concat(response.data.data)))
      .catch((error) => alert(error));
  }, [page]);
  // console.log(templeData.length === dataCount ? )
  return (
    <Container
      fluid
      className="back-contain Paddings-Top-Contain-P"
      style={{ animation: "fadeIn linear 3s" }}
    >
      {loader ? (
        <Loader />
      ) : (
        <>
          <DivineNavbar />
          <LabelOfContent title="Decor Items" />
          <Row className="justify-content-center mx-lg-5 mb-5">
            {templeData.map((value, index) => (
              <ProductCard
                iditem={value._id}
                key={index}
                image={value.image[0]}
                name={value.name}
                price={value.price}
              />
            ))}
          </Row>
          <Row className="text-center mt-5 mb-5">
            <Col lg="12">
              <div
                className="btn btn-primary"
                onClick={() => SeeMore()}
                style={{
                  display: templeData.length === dataCount ? "none" : "",
                }}
              >
                See More
              </div>
            </Col>
          </Row>
          <Footer />
        </>
      )}
    </Container>
  );
};
export default DecorPage;
