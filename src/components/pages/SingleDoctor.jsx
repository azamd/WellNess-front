import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
//import { Button } from "@mui/icons-material";
//import SideSearch from "../layout/blog/SideSearch";
import DoctorDetails from "../layout/doctors/DoctorDetails";
import { Header, Footer } from "../layout/general/index";
import { Link } from "react-router-dom";
/*import { AccessTime } from "@mui/icons-material";
import { Vaccines } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import { VisibilityIcon } from "@mui/icons-material";*/

const SingleDoctor = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    // fetch doctor detail by id
  }, []);

  //TODO:
  //Passing id as Param from Doctors Component to SingleDoctor Component
  // useFetchData is a function related to DoctorsList Component which is a child of Doctors Component
  // fetchSingleDoctor is a funtion related to DoctorDetails Component which is a common child of two different components : SingleDoctor & Doctors
  // DoctorDetails is a child component included in SingleDoctor as a tag and interact with Doctors Component (retrieve the id sent from Doctors Component)
  // Doctors (DoctorsList) ====id===> SingleDoctor(DoctorDetails) => Showing details of a specific chosen doctor passing by the Doctors list UI.

  return (
    <div>
      <Header />
      <main id="main">
        <div className="breadcrumbs d-flex align-items-center">
          <div className="container position-relative d-flex flex-column align-items-center">
            <h2>Doctors</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Doctors</li>
            </ol>
          </div>
        </div>

        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="row g-5">
              <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                <DoctorDetails />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default SingleDoctor;
