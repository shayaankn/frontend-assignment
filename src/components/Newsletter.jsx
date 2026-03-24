function Newsletter() {
  return (
    <section className="bg-brand py-5">
      <div className="container py-md-3">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8 col-xl-6">
            <p className="text-success fw-semibold mb-2">Newsletter</p>
            <h3 className="fw-bold mb-3">Watch our Courses</h3>
            <p className="text-muted fw-medium mb-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>

            <div className="input-group">
              <input
                type="email"
                className="form-control rounded-0"
                placeholder="Your Email"
                aria-label="Your Email"
              />
              <button
                className="btn btn-success btn-lg rounded-0 px-4"
                type="button"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
