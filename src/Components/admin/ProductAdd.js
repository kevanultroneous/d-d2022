import React, { Component } from "react";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image_file: null,
      productInformation: "",
    };
  }

  // Image Preview Handler
  handleImagePreview = (e) => {
    this.setState({
      image_file: e.target.files,
      productInformation: "",
    });
  };

  AddproductInformation = (event, editor) => {
    localStorage.setItem("productInformationAdd", editor.getData());
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

    let productInformationAdd = localStorage.getItem("productInformationAdd");
    formData.append("name", this.name.value);
    formData.append("price", this.price.value);
    formData.append("discountedPrice", this.discountedPrice.value);
    formData.append("information", this.information.value);
    formData.append("stock", this.stock.value);
    formData.append("productInformation", productInformationAdd);
    formData.append("type", this.type.value);

    axios
      .post(`https://divinedecores.com.au:8000/api/addtemple`, formData, {
        headers: headers,
      })
      .then((res) => {
        //    console.log("asdbhjsad")
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
                    <li className="breadcrumb-item active">Add Product</li>
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
                      <h3 className="card-title">Add Product</h3>
                    </div>
                    <form onSubmit={this.handleSubmit}>
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
                          />
                        </div>

                        <div class="form-group">
                          <label>Price</label>
                          <input
                            ref={(ref) => {
                              this.price = ref;
                            }}
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
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
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
                            <option value="temple">Temple</option>
                            <option value="decor">Decor</option>
                          </select>
                        </div>

                        <div class="form-group">
                          <label>Information</label>
                          <CKEditor
                            editor={ClassicEditor}
                            data=""
                            onChange={this.AddproductInformation}
                          />
                        </div>

                        <div class="form-group">
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

export default product;
