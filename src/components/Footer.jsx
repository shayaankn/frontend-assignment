function Footer() {
  return (
    <footer>
      <div className="container py-5">
        <div className="row gy-4">
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Company Info</h6>
            <ul className="list-unstyled mt-3 mb-0">
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Carrier
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  We are hiring
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled mt-3 mb-0">
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Carrier
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  We are hiring
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Features</h6>
            <ul className="list-unstyled mt-3 mb-0">
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Business Marketing
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  User Analytic
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Live Chat
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Unlimited Support
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Resources</h6>
            <ul className="list-unstyled mt-3 mb-0">
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  IOS & Android
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Watch a Demo
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  Customers
                </a>
              </li>
              <li className="mb-2">
                <a className="text-muted fw-semibold small text-decoration-none" href="#">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="fw-bold">Get In Touch</h6>
            <ul className="list-unstyled mt-3 mb-0 text-muted">
              <li className="mb-3 d-flex align-items-start">
                <i
                  className="bi bi-telephone-fill text-success me-3 fs-5"
                  aria-hidden="true"
                />
                <div className="fw-semibold small">(480) 555-0103</div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <i
                  className="bi bi-geo-alt-fill text-success me-3 fs-5"
                  aria-hidden="true"
                />
                <div className="fw-semibold small">4517 Washington Ave. Manchester, Kentucky 39495</div>
              </li>
              <li className="d-flex align-items-start">
                <i
                  className="bi bi-envelope-fill text-success me-3 fs-5"
                  aria-hidden="true"
                />
                <div className="fw-semibold small">debra.holt@example.com</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="sub-footer">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-4">
            <div className="text-muted small fw-semibold">
              Made With Love By Figmaland All Right Reserved
            </div>
            <div className="mt-3 mt-md-0">
              <a className="text-success me-4" href="#" aria-label="facebook">
                <i className="bi bi-facebook fs-4" />
              </a>
              <a className="text-success me-4" href="#" aria-label="instagram">
                <i className="bi bi-instagram fs-4" />
              </a>
              <a className="text-success" href="#" aria-label="twitter">
                <i className="bi bi-twitter fs-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
