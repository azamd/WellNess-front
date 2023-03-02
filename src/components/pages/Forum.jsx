import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from '../layout/general/index'
import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

const Forum = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div>
      <Header />
      <main id="main">

        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url(/assets/img/team-header.jpg)" }} >
          <div className="container position-relative d-flex flex-column align-items-center">

            <h2>Roundtable</h2>
            <ol>
              <li><Link to="/Home">Home</Link></li>
              <li>Forum</li>
            </ol>

          </div>
        </div>








      </main>
      <Footer />
      <div>

        <Link to="." className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>

      </div>
    </div>
  )

}; export default Forum