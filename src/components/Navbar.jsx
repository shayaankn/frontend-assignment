function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-brand py-3"
      aria-label="Offcanvas navbar large"
    >
      <div className="container">
        <a className="navbar-brand text-dark fs-4 fw-bold pe-5" href="#">
          Brandname
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-start align-items-lg-center flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link text-muted fw-medium active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted fw-medium" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted fw-medium" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted fw-medium" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="d-flex flex-row gap-2 mt-4 mt-lg-0">
              <button className="btn btn-navbar btn-outline-success border-0">
                Login
              </button>
              <button className="btn btn-navbar btn-success text-uppercase">
                Join Us<i className="bi bi-arrow-right ms-3"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
