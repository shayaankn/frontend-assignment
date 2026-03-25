function TeamCard({ img, name, role }) {
  return (
    <div className="card team-card border-0 shadow h-100 text-center">
      <img
        src={img}
        alt={name}
        className="card-img-top rounded-top"
        style={{ objectFit: "cover", height: 240 }}
      />
      <div className="card-body">
        <h6 className="fw-bold">{name}</h6>
        <div className="text-muted occupation mb-2">{role}</div>

        <div className="d-flex justify-content-center gap-4">
          <a className="text-success" href="#" aria-label="facebook">
            <i className="bi bi-facebook social-icon" />
          </a>
          <a className="text-success" href="#" aria-label="instagram">
            <i className="bi bi-instagram social-icon" />
          </a>
          <a className="text-success" href="#" aria-label="twitter">
            <i className="bi bi-twitter social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
