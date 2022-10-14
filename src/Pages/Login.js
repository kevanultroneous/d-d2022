import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.email.value,
        password: this.password.value,
      }),
    };
    fetch("https://divinedecores.com.au:8000/api/signin", requestOptions)
      .then((res) => {
        if (res.status == 405) {
          alert("Please add valid details");
        } else {
          return res.json();
        }
      })
      .then((json) => {
        let status = json.status;
        localStorage.setItem("token", json.token);
        localStorage.setItem("name", json.data.name);
        if (status == "success") {
          window.location.href = "/admin/product";
        } else {
          alert(json.message);
        }
      });
  }

  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="javascript:void()">
              <b>Divine</b>Decores
            </a>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    ref={(ref) => {
                      this.email = ref;
                    }}
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope" />
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    ref={(ref) => {
                      this.password = ref;
                    }}
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
