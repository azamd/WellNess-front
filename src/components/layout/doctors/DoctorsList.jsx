import React from "react";
import useFetchData from "./useFetchData.js";
import { Link } from "react-router-dom";
import { AccessTime } from "@mui/icons-material";
import { Vaccines } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
//import { VisibilityIcon } from "@mui/icons-material";
import "./drs.css";

const DoctorsList = () => {
  const { experts } = useFetchData();

  return experts.map((exp) => (
    <div key={exp.userId}>
      <div className="post-img">
        <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
      </div>

      <h2 className="title">
        <Link to="">
          Dr. {exp.userFirstName} {exp.userLastName}
        </Link>
      </h2>
      <div className="meta-top">
        <ul>
          <li className="d-flex align-items-center">
            <Vaccines />
            <a href="blog-details.html">{exp.specialty}</a>
          </li>
          <li className="d-flex align-items-center">
            <AccessTime />
            <a href="blog-details.html">
              <time dateTime="2022-01-01">
                {exp.start_hour} AM to {exp.end_hour} PM
              </time>
            </a>
          </li>
          <li className="d-flex align-items-center">
            <LocationOn />
            <a href="blog-details.html">
              {exp.address}, {exp.city}, {exp.zipCode}
            </a>
          </li>
        </ul>
      </div>

      <div className="read-more mt-auto align-self-end">
        <Link to={`/SingleDoctor/${exp.userId}`}>
          More Details<i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  ));
};
export default DoctorsList;
