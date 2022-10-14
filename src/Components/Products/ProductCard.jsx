import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import slugify from "slugify";

const ProductCard = (value) => {
  return (
    <div className="col-lg-6 mt-lg-5 mt-xl-4 mt-4 mt-md-4 col-md-5 col-xl-3 mobile-padding">
      <Link to={`/viewitem/${value.iditem}`}>
        <div className="card p-0 border-0 w-100">
          <Image src={value.image} className="card-img-top" alt="" />
          <div
            className="card-img-overlay overlay overlay-m"
            style={{ justifyContent: "normal" }}
          >
            <div className="row">
              <div className="col-8 col-xl-8 col-lg-8  col-md-8 col-xs-8 position-absolute bottom-0 mb-2 text-white fw-700">
                {value.name}
              </div>
              <div className="col-4 col-xl-4 col-lg-4 col-md-4 col-xs-4 position-absolute bottom-0 end-0 text-end  mb-2 text-white fw-700">
                ${value.price}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default ProductCard;
