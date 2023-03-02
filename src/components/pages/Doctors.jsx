import React from 'react';
import{Link} from 'react-router-dom';
import {Footer, Header} from '../layout/general/index'
import SideSearch from '../layout/blog/SideSearch'
import{useEffect} from 'react'
import DoctorsList from '../layout/doctors/DoctorsList'
import AOS from 'aos'
import "aos/dist/aos.css";
import '../layout/doctors/drs.css'

const Doctors = () =>
{
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    
  
return(
    <div>
<Header />
  <main id="main">

    <div className="breadcrumbs d-flex align-items-center" style={{backgroundImage: "url(/assets/img/doctors-cover.jpg)"}}>
      <div className="container position-relative d-flex flex-column align-items-center">

        <h2>Doctors</h2>
        <ol>
          <li><Link to="/">Home</Link></li>
          <li>Doctors</li>
        </ol>

      </div>
    </div>

    <section id="blog" className="blog">
      <div className="container" data-aos="fade-up">

        <div className="row g-5">

          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

            <div className="row gy-5 posts-list">

              <div className="col-lg-6">
              <article className="d-flex flex-column" >
                <DoctorsList/>
              </article>
              </div>

            </div>

            
          </div>

          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">

            <div className="sidebar ps-lg-4">

              <SideSearch/>

              

              

            </div>

          </div>

        </div>

      </div>
    </section>

  </main>

 <Footer/>
 <div>


  
</div>
</div>
)
}; export default Doctors; 