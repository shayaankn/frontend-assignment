import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    // TODO: replace with real submit logic
    console.log("Subscribed:", email);
  };

  return (
    <section className="bg-brand py-5">
      <div className="container py-md-5 my-md-3">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-8 col-xl-6">
            <p className="text-success fw-semibold small mb-3">Newsletter</p>
            <h3 className="fw-bold mb-3">Watch our Courses</h3>
            <p className="text-muted fw-medium small mb-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="input-group">
                <input
                  type="email"
                  className={`form-control form-control-sm ${error ? "is-invalid" : ""}`}
                  placeholder="Your Email"
                  aria-label="Your Email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <button
                  className="btn btn-success btn-newsletter px-4"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
              {error && (
                <div className="invalid-feedback d-block mt-2">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
