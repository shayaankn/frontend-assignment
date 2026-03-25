import TeamCard from "./TeamCard";
import user1 from "../assets/users/user-1.png";
import user2 from "../assets/users/user-2.png";
import user3 from "../assets/users/user-3.png";
import user4 from "../assets/users/user-4.png";

function Team() {
  const members = [
    { img: user1, name: "Julian Jameson", role: "Profession" },
    { img: user2, name: "Julian Jameson", role: "Profession" },
    { img: user3, name: "Julian Jameson", role: "Profession" },
    { img: user4, name: "Julian Jameson", role: "Profession" },
  ];

  return (
    <section className="py-5">
      <div className="container pb-lg-5">
        <div className="row">
          <div className="col-lg-6">
            <p className="text-success fw-semibold small mb-3">Team</p>
            <h2 className="fw-bold fs-3 mb-3">Get Quality Education</h2>
            <p className="text-muted fw-medium small mb-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>

        <div className="row g-4 mt-lg-3">
          {members.map((m, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <TeamCard img={m.img} name={m.name} role={m.role} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
