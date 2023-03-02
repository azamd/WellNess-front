import React from "react";
//import { Link } from "react-router-dom";
import { Footer, Header } from "../layout/general/index";
//import { useEffect } from "react";
//import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import FullWidthTabs from "../layout/manage/FullWidthTabs";

const Manage = () => {
  return (
    <div>
      <Header />
      <main id="main">
        <div
          className="breadcrumbs d-flex align-items-center"
          style={{ backgroundImage: "url(/assets/img/desk.jpg)" }}
        >
          <div className="container position-relative d-flex flex-column align-items-center">
            <h2>Admin Management</h2>
          </div>
        </div>

        <FullWidthTabs />
      </main>

      <Footer />
      <div>
        <Link to="." className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>

      </div>
    </div>
  );
};
export default Manage;
