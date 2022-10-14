const SideNav = () => {
  let uri = window.location.pathname.split("/");
  let name = localStorage.getItem("name");
  return (
    <div>
      <aside
        className="main-sidebar sidebar-dark-primary elevation-4"
        style={{ position: "fixed" }}
      >
        {/* Brand Logo */}
        <a href="#" className="brand-link">
          <img
            src="/favicon.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">Divine Decores</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="/favicon.png"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a
                href="#"
                style={{ textTransform: "capitalize" }}
                className="d-block"
              >
                {name}
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* <li className={ (uri[2] == 'product-details' || uri[2] == 'product' || uri[2] == 'add-product' || uri[2] == 'product-edit') ? 'nav-item menu-open' : 'nav-item' }>
                    <a href="#" className="nav-link active">
                        <i  style={{color: (uri[2] == 'product-details' || uri[2] == 'product' || uri[2] == 'add-product' || uri[2] == 'product-edit') ? '#343a40' : '#c2c7d0'}} className="nav-icon fas fa-tachometer-alt" />
                        <p  style={{color: (uri[2] == 'product-details' || uri[2] == 'product' || uri[2] == 'add-product' || uri[2] == 'product-edit') ? '#343a40' : '#c2c7d0'}}>
                            Product
                            <i className="right fas fa-angle-left" />
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="/admin/add-product"  className={ (uri[2] == 'add-product') ? 'nav-link active' : 'nav-link' }>
                                <i style={{color: (uri[2] == 'add-product') ? '#343a40' : '#c2c7d0'}} className="far fa-circle nav-icon" />
                                <p style={{color: (uri[2] == 'add-product') ? '#343a40' : '#c2c7d0'}}>Add Product</p>
                            </a>
                        </li>
                        
                        <li className="nav-item">
                            <a href={ '/admin/product' }  className={ (uri[2] == 'product-details' || uri[2] == 'product' || uri[2] == 'product-edit') ? 'nav-link active' : 'nav-link' }>
                                <i style={{color: (uri[2] == 'product-details' || uri[2] == 'product' || uri[2] == 'product-edit') ? '#343a40' : '#c2c7d0'}} className="far fa-circle nav-icon" />
                                <p style={{color: (uri[2] == 'product-details' || uri[2] == 'product' || uri[2] == 'product-edit') ? '#343a40' : '#c2c7d0'}}>List Product</p>
                            </a>
                        </li>
                    </ul>
                </li> */}

              <li className="nav-item">
                <a
                  href={"/admin/product"}
                  className={
                    uri[2] == "product-details" ||
                    uri[2] == "product" ||
                    uri[2] == "add-product" ||
                    uri[2] == "product-edit"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  <i
                    style={{
                      color:
                        uri[2] == "product-details" ||
                        uri[2] == "product" ||
                        uri[2] == "add-product" ||
                        uri[2] == "product-edit"
                          ? "#343a40"
                          : "#c2c7d0",
                    }}
                    className="nav-icon fas fa-th"
                  />
                  <p
                    style={{
                      color:
                        uri[2] == "product-details" ||
                        uri[2] == "product" ||
                        uri[2] == "add-product" ||
                        uri[2] == "product-edit"
                          ? "#343a40"
                          : "#c2c7d0",
                    }}
                  >
                    {" "}
                    Product{" "}
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a
                  href={"/admin/inquire"}
                  className={
                    uri[2] == "inquire" ? "nav-link active" : "nav-link"
                  }
                >
                  <i
                    style={{
                      color: uri[2] == "inquire" ? "#343a40" : "#c2c7d0",
                    }}
                    className="nav-icon fas fa-th"
                  />
                  <p
                    style={{
                      color: uri[2] == "inquire" ? "#343a40" : "#c2c7d0",
                    }}
                  >
                    {" "}
                    Inquire{" "}
                  </p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
};

export default SideNav;
