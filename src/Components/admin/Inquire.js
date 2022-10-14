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
    })
    .catch(function (error) {
      alert("Please enter valid details");
    });
}

class Inquire extends Component {
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

    fetch("https://divinedecores.com.au:8000/api/getinquiredata")
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
                    <h1>Inquire</h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Inquire</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            <section className="content">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Inquires list</h3>
                </div>
                <div className="card-body p-0">
                  <table className="table table-striped projects">
                    <thead>
                      <tr>
                        <th style={{ width: "1%" }}>#</th>
                        <th>Name</th>
                        <th>Temple Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Frame</th>
                        <th>Size* (in cms)</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.templename}</td>
                          <td>{item.email}</td>
                          <td>{item.phone}</td>
                          <td>{item.frame}</td>
                          <td>
                            Width - {item.width} <br />
                            Height - {item.height} <br />
                            Depth - {item.depth} <br />
                          </td>
                          <td>{item.name}</td>
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

export default Inquire;
