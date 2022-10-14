import React, { Component } from "react";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      status: "fail",
    };
  }

  componentDidMount() {
    let templeid = this.props.params.templeid;

    fetch("https://divinedecores.com.au:8000/api/gettemplebyid/" + templeid)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          status: "success",
          items: json.data,
        });
      })
      .catch(function (error) {
        alert("Please enetr valid details");
      });
  }

  render() {
    var { status, items } = this.state;

    if (status == "fail") {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="content-wrapper">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Product</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        <a href="/admin/product">Product</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Product Details
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <div className="card card-solid">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12 col-sm-6">
                      <h3 className="d-inline-block d-sm-none">{items.name}</h3>
                      <div className="col-12">
                        <img
                          src={items.image[0]}
                          className="product-image"
                          alt="Product Image"
                        />
                      </div>
                      <div className="col-12 product-image-thumbs">
                        {items.image.map((imageName, index) =>
                          index == 0 ? (
                            <div className="product-image-thumb active">
                              <img src={imageName} alt="Product Image" />
                            </div>
                          ) : (
                            <div className="product-image-thumb ">
                              <img src={imageName} alt="Product Image" />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <h3 className="my-3">{items.name}</h3>
                      <p>{items.information}</p>
                      <hr />

                      <div className="bg-gray py-2 px-3 mt-4">
                        <h2 className="mb-0">${items.price}</h2>
                        <h4 className="mt-0">
                          <small>
                            Discount price: ${items.discountedPrice}{" "}
                          </small>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <nav className="w-100">
                      <div
                        className="nav nav-tabs"
                        id="product-tab"
                        role="tablist"
                      >
                        <a
                          className="nav-item nav-link active"
                          id="product-desc-tab"
                          data-toggle="tab"
                          href="#product-desc"
                          role="tab"
                          aria-controls="product-desc"
                          aria-selected="true"
                        >
                          Description
                        </a>
                        {/* <a className="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Comments</a>
                                    <a className="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Rating</a> */}
                      </div>
                    </nav>
                    <div className="tab-content p-3" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="product-desc"
                        role="tabpanel"
                        aria-labelledby="product-desc-tab"
                      >
                        {" "}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: items.productInformation,
                          }}
                        />{" "}
                      </div>
                      {/* <div className="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab"> Vivamus rhoncus nisl sed venenatis luctus. Sed condimentum risus ut tortor feugiat laoreet. Suspendisse potenti. Donec et finibus sem, ut commodo lectus. Cras eget neque dignissim, placerat orci interdum, venenatis odio. Nulla turpis elit, consequat eu eros ac, consectetur fringilla urna. Duis gravida ex pulvinar mauris ornare, eget porttitor enim vulputate. Mauris hendrerit, massa nec aliquam cursus, ex elit euismod lorem, vehicula rhoncus nisl dui sit amet eros. Nulla turpis lorem, dignissim a sapien eget, ultrices venenatis dolor. Curabitur vel turpis at magna elementum hendrerit vel id dui. Curabitur a ex ullamcorper, ornare velit vel, tincidunt ipsum. </div>
                                    <div className="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab"> Cras ut ipsum ornare, aliquam ipsum non, posuere elit. In hac habitasse platea dictumst. Aenean elementum leo augue, id fermentum risus efficitur vel. Nulla iaculis malesuada scelerisque. Praesent vel ipsum felis. Ut molestie, purus aliquam placerat sollicitudin, mi ligula euismod neque, non bibendum nibh neque et erat. Etiam dignissim aliquam ligula, aliquet feugiat nibh rhoncus ut. Aliquam efficitur lacinia lacinia. Morbi ac molestie lectus, vitae hendrerit nisl. Nullam metus odio, malesuada in vehicula at, consectetur nec justo. Quisque suscipit odio velit, at accumsan urna vestibulum a. Proin dictum, urna ut varius consectetur, sapien justo porta lectus, at mollis nisi orci et nulla. Donec pellentesque tortor vel nisl commodo ullamcorper. Donec varius massa at semper posuere. Integer finibus orci vitae vehicula placerat. </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
  }
}

export default withParams(product);
