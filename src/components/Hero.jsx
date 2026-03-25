import heroImg from "../assets/hero-cover-1.png";

function Hero() {
  return (
    <section className="bg-brand">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-5 py-5">
            <p className="text-success fw-semibold mb-2">Welcome</p>
            <h1 className="display-4 fw-bold mb-4">
              Best Learning Opportunities
            </h1>
            <p className="fs-5 fw-medium text-muted">
              Our goal is to make online education work for everyone
            </p>
            <div className="mt-4 d-flex gap-2">
              <a className="btn btn-success btn-lg px-4" href="#">
                Join Us
              </a>
              <a className="btn btn-outline-success btn-lg px-4" href="#">
                Learn More
              </a>
            </div>
          </div>

          <div className="col-md-6 col-xl-4 offset-xl-1 text-center">
            <img src={heroImg} alt="Hero" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
