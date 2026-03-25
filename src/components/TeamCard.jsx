function TeamCard({ img, name, role }) {
  return (
    <div className="card border-0 shadow h-100 text-center">
      <img
        src={img}
        alt={name}
        className="card-img-top rounded-top"
        style={{ objectFit: "cover", height: 240 }}
      />
      <div className="card-body">
        <h6 className="fw-bold">{name}</h6>
        <div className="text-muted small mb-3">{role}</div>

        <div className="d-flex justify-content-center gap-3">
          <a className="text-success" href="#" aria-label="facebook">
            <i className="bi bi-facebook" />
          </a>
          <a className="text-success" href="#" aria-label="instagram">
            <i className="bi bi-instagram" />
          </a>
          <a className="text-success" href="#" aria-label="twitter">
            <i className="bi bi-twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
