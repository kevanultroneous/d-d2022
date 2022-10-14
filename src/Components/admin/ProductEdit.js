import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_file: null,
      items: [],
      status: "fail",
      productInformation: "",
    };
  }

  componentDidMount() {
    let templeid = this.props.params.templeid;
    fetch("https://divinedecores.com.au:8000/api/gettemplebyid/" + templeid)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          status: "success",
          items: json.data,
        });
      })
      .catch(function (error) {
        alert("Please enetr valid details");
      });
  }

  // Image Preview Handler
  handleImagePreview = (e) => {
    this.setState({
      image_file: e.target.files,
    });
  };

  AddproductInformation = (event, editor) => {
    localStorage.setItem("productInformationEdit", editor.getData());
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let token = localStorage.getItem("token");

    let headers = {
      Authorization: "Bearer " + token,
      "Content-Type": "multipart/form-data",
    };

    let formData = new FormData();

    if (this.state.image_file != null) {
      for (let index = 0; index < this.state.image_file.length; index++) {
        formData.append("image", this.state.image_file[index]);
      }
    }

    let productInformationEdit = localStorage.getItem("productInformationEdit");
    formData.append("id", this.product_id.value);
    formData.append("name", this.name.value);
    formData.append("price", this.price.value);
    formData.append("active", this.active.value);
    formData.append("discountedPrice", this.discountedPrice.value);
    formData.append("information", this.information.value);
    formData.append("stock", this.stock.value);
    formData.append("type", this.type.value);
    formData.append("productInformation", productInformationEdit);

    axios
      .post(`https://divinedecores.com.au:8000/api/updatetemples`, formData, {
        headers: headers,
      })
      .then((res) => {
        let status = res.data.status;
        if (status == "success") {
          window.location.href = "/admin/product";
        } else {
          alert(res.data.message);
        }
      })
      .catch(function (error) {
        alert("Please enetr valid details");
      });
  };

  render() {
    var { status, items } = this.state;

    if (status == "fail") {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="content-wrapper" style={{ paddingRight: "15px" }}>
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
                      <li className="breadcrumb-item">
                        <a href="/admin/product">Product</a>
                      </li>
                      <li className="breadcrumb-item active">Edit Product</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-primary">
                      <div className="card-header">
                        <h3 className="card-title">Edit Product</h3>
                      </div>
                      <form onSubmit={this.handleSubmit}>
                        <input
                          ref={(ref) => {
                            this.product_id = ref;
                          }}
                          class="form-control"
                          placeholder="Enter product name"
                          type="hidden"
                          defaultValue={items._id}
                        />
                        <div className="card-body">
                          <div class="form-group">
                            <label>Name</label>
                            <input
                              ref={(ref) => {
                                this.name = ref;
                              }}
                              class="form-control"
                              placeholder="Enter product name"
                              type="text"
                              onChange={(e) =>
                                this.setState({ name: e.target.value })
                              }
                              defaultValue={items.name}
                            />
                          </div>

                          <div class="form-group">
                            <label>Price</label>
                            <input
                              ref={(ref) => {
                                this.price = ref;
                              }}
                              defaultValue={items.price}
                              class="form-control"
                              placeholder="Enter product price"
                              type="text"
                            />
                          </div>

                          <div class="form-group">
                            <label>Discounted Price</label>
                            <input
                              ref={(ref) => {
                                this.discountedPrice = ref;
                              }}
                              defaultValue={items.discountedPrice}
                              class="form-control"
                              placeholder="Enter product discounted price"
                              type="text"
                            />
                          </div>

                          <div class="form-group">
                            <label>Description</label>
                            <textarea
                              ref={(ref) => {
                                this.information = ref;
                              }}
                              defaultValue={items.information}
                              class="form-control"
                              placeholder="Enter product description"
                            ></textarea>
                          </div>

                          <div class="form-group">
                            <label>Stock</label>
                            <select
                              ref={(ref) => {
                                this.stock = ref;
                              }}
                              class="form-control"
                            >
                              <option
                                value="Yes"
                                selected={items.stock == "Yes" ? true : false}
                              >
                                Yes
                              </option>
                              <option
                                value="No"
                                selected={items.stock == "No" ? true : false}
                              >
                                No
                              </option>
                            </select>
                          </div>

                          <div class="form-group">
                            <label>Type</label>
                            <select
                              ref={(ref) => {
                                this.type = ref;
                              }}
                              class="form-control"
                            >
                              <option
                                value="temple"
                                selected={items.type == "temple" ? true : false}
                              >
                                Temple
                              </option>
                              <option
                                value="decor"
                                selected={items.type == "decor" ? true : false}
                              >
                                Decor
                              </option>
                            </select>
                          </div>

                          <div class="form-group">
                            <label>Information</label>
                            <CKEditor
                              editor={ClassicEditor}
                              data={"" + items.productInformation}
                              onChange={this.AddproductInformation}
                            />
                          </div>

                          <div class="form-group">
                            <label>Status</label>
                            <select
                              ref={(ref) => {
                                this.active = ref;
                              }}
                              class="form-control"
                            >
                              <option
                                value="true"
                                selected={items.active ? true : false}
                              >
                                Enable
                              </option>
                              <option
                                value="false"
                                selected={items.active ? false : true}
                              >
                                Disable
                              </option>
                            </select>
                          </div>

                          <div class="form-group">
                            {items.image.map((imageName, index) => (
                              <img
                                style={{
                                  width: "100px",
                                  marginRight: "10px",
                                  borderRadius: "10px",
                                }}
                                src={imageName}
                                className="product-image"
                                alt="Product Image"
                              />
                            ))}
                            <br />
                            <label>Image</label>
                            <input
                              onChange={this.handleImagePreview}
                              class="form-control"
                              multiple
                              placeholder="image"
                              type="file"
                            />
                          </div>
                        </div>

                        <div class="card-footer">
                          <button type="submit" class="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </form>
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
