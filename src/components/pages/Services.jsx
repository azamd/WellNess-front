import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from '../layout/general/index'
import { useEffect } from 'react'
import OurServices from '../layout/home/OurServices'
import AOS from 'aos'
import "aos/dist/aos.css";


const Services = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div>
      <Header />
      <main id="main">

        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url(/assets/img/services-header.jpg)" }} >
          <div className="container position-relative d-flex flex-column align-items-center">

            <h2>What We do?</h2>
            <ol>
              <li><Link to="/Home">Home</Link></li>
              <li>Services</li>
            </ol>





          </div>

        </div>


        <OurServices />





      </main>
      <Footer />
      <div>

        <Link to="." className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>


      </div>
    </div>
  )

}; export default Services