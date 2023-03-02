import React from "react";

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Team</h2>
        </div>

        <div className="row gy-4">
          <div
            className="col-lg-3 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="team-member">
              <div className="member-img">
                <img
                  src="assets/img/team/team-1.jpg"
                  className="img-fluid"
                  alt=""
                />
                <div className="social">
                  <Link to="">
                    <i className="bi bi-twitter"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-instagram"></i>
                  </Link>
                  <Link to="">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Team;
