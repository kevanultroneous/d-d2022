import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

function delete_product(id) {
  let token = localStorage.getItem("token");
  let headers = {
    Authorization: "Bearer " + token,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  let formData = qs.stringify({ id: id });

  axios
    .post(`https://divinedecores.com.au:8000/api/deletetemples`, formData, {
      headers: headers,
    })
    .then((res) => {
      let status = res.data.status;
      if (status == "success") {
        window.location.href = "/admin/product";
      } else {
        alert(res.data.message);
      }
    });
}

class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    let headers = {
      Authorization: "Bearer " + token,
    };

    fetch("https://divinedecores.com.au:8000/api/gettemplesadmin", {
      headers: headers,
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json.data,
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
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
                      <li className="breadcrumb-item active">Product</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Products </h3>
                  <a
                    className=""
                    style={{
                      float: "right",
                      marginRight: "10px",
                      display: "inlineBlock",
                      fontWeight: "400",
                      color: "#212529",
                      textAlign: "center",
                      verticalAlign: "middle",
                      userSelect: "none",
                      backgroundColor: "transparent",
                      border: "1px solid transparent",
                      cursor: "pointer",
                      padding: "0.25rem 0.5rem",
                      fontSize: ".875rem",
                      lineHeight: "1.5",
                      borderRadius: "0.2rem",
                      color: "#fff",
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                      boxShadow: "none",
                    }}
                    href={"/admin/add-product"}
                  >
                    <i className="fas fa-plus"></i> Add
                  </a>
                </div>
                <div className="card-body p-0">
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "1%" }}>#</th>
                        <th>Poduct Name</th>
                        <th>Product Image</th>
                        <th>Type</th>
                        <th className="text-center">Status</th>
                        <th style={{ width: "20%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <a href={"product-details/" + item._id}>
                              {item.name}
                            </a>
                          </td>
                          <td>
                            <ul className="list-inline">
                              {item.image.map((imageName, index) => (
                                // console.log(imageName)
                                <li className="list-inline-item">
                                  <img
                                    alt="Avatar"
                                    className="table-avatar"
                                    src={imageName}
                                  />
                                </li>
                              ))}
                            </ul>
                          </td>
                          <td style={{ textTransform: "capitalize" }}>
                            {item.type}
                          </td>
                          <td className="project-state">
                            <span
                              className={
                                item.active == true
                                  ? "badge badge-success"
                                  : "badge badge-danger"
                              }
                            >
                              {" "}
                              {item.active == true ? "Enable" : "Disable"}
                            </span>
                          </td>
                          <td className="project-actions text-right">
                            <a
                              className=""
                              style={{
                                marginRight: "10px",
                                display: "inlineBlock",
                                fontWeight: "400",
                                color: "#212529",
                                textAlign: "center",
                                verticalAlign: "middle",
                                userSelect: "none",
                                backgroundColor: "transparent",
                                border: "1px solid transparent",
                                cursor: "pointer",
                                padding: "0.25rem 0.5rem",
                                fontSize: ".875rem",
                                lineHeight: "1.5",
                                borderRadius: "0.2rem",
                                color: "#fff",
                                backgroundColor: "#007bff",
                                borderColor: "#007bff",
                                boxShadow: "none",
                              }}
                              href={"product-details/" + item._id}
                            >
                              <i className="fas fa-eye"></i> View
                            </a>

                            <a
                              className=""
                              style={{
                                marginRight: "10px",
                                display: "inlineBlock",
                                fontWeight: "400",
                                color: "#212529",
                                textAlign: "center",
                                verticalAlign: "middle",
                                userSelect: "none",
                                backgroundColor: "#17a2b8",
                                border: "1px solid #17a2b8",
                                cursor: "pointer",
                                padding: "0.25rem 0.5rem",
                                fontSize: ".875rem",
                                lineHeight: "1.5",
                                borderRadius: "0.2rem",
                                color: "#fff",
                                backgroundColor: "#17a2b8",
                                borderColor: "#17a2b8",
                                boxShadow: "none",
                              }}
                              href={"product-edit/" + item._id}
                            >
                              <i className="fas fa-pencil-alt"></i> Edit
                            </a>

                            <a
                              className=""
                              style={{
                                marginRight: "10px",
                                display: "inlineBlock",
                                fontWeight: "400",
                                color: "#212529",
                                textAlign: "center",
                                verticalAlign: "middle",
                                userSelect: "none",
                                backgroundColor: "#17a2b8",
                                border: "1px solid #17a2b8",
                                cursor: "pointer",
                                padding: "0.25rem 0.5rem",
                                fontSize: ".875rem",
                                lineHeight: "1.5",
                                borderRadius: "0.2rem",
                                color: "#fff",
                                backgroundColor: "#c82333",
                                borderColor: "#c82333",
                                boxShadow: "none",
                              }}
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure want to delete this product ?"
                                  )
                                ) {
                                  delete_product(item._id);
                                }
                              }}
                            >
                              <i className="fas fa-trash"></i> Delete
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    }
  }
}

export default product;
