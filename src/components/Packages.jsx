import blackboardIcon from "../assets/icons/blackboard.svg";
import telescopeIcon from "../assets/icons/telescope.svg";

function Packages() {
  return (
    <section className="py-5">
      <div className="container py-md-5">
        <div className="row align-items-start">
          <div className="col-lg-5 mb-5 mb-md-0">
            <div
              style={{
                width: 94,
                height: 7,
                background: "#E74040",
                marginBottom: 28,
              }}
            />
            <h2 className="fw-bold display-6">Affordable Packages</h2>
            <p className="fw-medium text-muted small mt-4">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
            <a
              className="icon-link icon-link-hover text-decoration-none fw-semibold text-success small mt-3"
              href="#"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="bi"
                fill="currentColor"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 3.5a.5.5 0 0 1 .7 0l4 4a.5.5 0 0 1 0 .7l-4 4a.5.5 0 1 1-.7-.7L9.3 8 6 4.2a.5.5 0 0 1 0-.7z"
                />
              </svg>
            </a>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="row g-3">
              <div className="col-md-6">
                <div className="card packages-card h-100 shadow border-0">
                  <div className="card-body">
                    <div
                      className="rounded-3 bg-success text-light d-flex align-items-center justify-content-center mb-4"
                      style={{ width: 70, height: 76 }}
                    >
                      <img
                        src={blackboardIcon}
                        alt="Blackboard"
                        style={{ width: 32, height: 32 }}
                      />
                    </div>
                    <h5 className="fw-bold fs-6">Certified Teacher</h5>
                    <div
                      style={{
                        width: 50,
                        height: 2,
                        background: "#E74040",
                        marginBottom: 18,
                        marginTop: 18,
                      }}
                    />
                    <p className="text-muted fw-medium small mb-0">
                      The gradual accumulation of information about
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card packages-card h-100 shadow border-0">
                  <div className="card-body">
                    <div
                      className="rounded-3 bg-success text-light d-flex align-items-center justify-content-center mb-4"
                      style={{ width: 70, height: 76 }}
                    >
                      <img
                        src={telescopeIcon}
                        alt="Telescope"
                        style={{ width: 32, height: 32 }}
                      />
                    </div>
                    <h5 className="fw-bold fs-6">Expert Instruction</h5>
                    <div
                      style={{
                        width: 50,
                        height: 2,
                        background: "#E74040",
                        marginBottom: 18,
                        marginTop: 18,
                      }}
                    />
                    <p className="text-muted fw-medium small mb-0">
                      The gradual accumulation of information about
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Packages;
