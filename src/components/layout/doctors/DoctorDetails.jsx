//import { useEffect } from "react";
//import AOS from "aos";
import "aos/dist/aos.css";
import useFetchSingleDoctor from "./useFetchSingleDoctor";
import Button from "react-bootstrap/Button";
import { AccessTime } from "@mui/icons-material";
import { Vaccines } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";

const DoctorDetails = () => {
  const { expert } = useFetchSingleDoctor();

  const exp = expert;
  return (
    <article className="blog-details" key={exp.userId}>
      <div className="post-img">
        <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
      </div>

      <h2 className="title">
        Dr. {exp.userFirstName} {exp.userLastName}
      </h2>

      <div className="meta-top">
        <ul>
          <li className="d-flex align-items-center">
            <Vaccines />
            {exp.specialty}
          </li>
          <li className="d-flex align-items-center">
            <AccessTime />
            {exp.start_hour} AM to {exp.end_hour} PM
          </li>
          <li className="d-flex align-items-center">
            <LocationOn />
            {exp.address}, {exp.city}, {exp.zipCode}
          </li>
        </ul>
      </div>

      <div className="content">
        <Button>
          <span>Take Appointment</span>
        </Button>
      </div>
    </article>
  );
};
export default DoctorDetails;
