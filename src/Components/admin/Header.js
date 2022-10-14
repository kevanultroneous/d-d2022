import React from "react";

import "../../Assets/admin/plugins/fontawesome-free/css/all.min.css";
import "../../Assets/admin/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "../../Assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "../../Assets/admin/plugins/jqvmap/jqvmap.min.css";
import "../../Assets/admin/dist/css/adminlte.min.css";
import "../../Assets/admin/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../../Assets/admin/plugins/daterangepicker/daterangepicker.css";
import "../../Assets/admin/plugins/summernote/summernote-bs4.min.css";
import "../../Assets/admin/plugins/codemirror/codemirror.css";
import "../../Assets/admin/plugins/codemirror/theme/monokai.css";

const Header = () => {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/admin/logout" role="button">
              <i class="fas fa-sign-out-alt"></i>
            </a>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-slide="true"
              href="#"
              role="button"
            >
              <i class="fa-solid fa-right-from-bracket"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
