import React, { useEffect } from "react"
//import CallToAction from "../layout/about/CallToAction"
import { Footer, Header } from "../layout/general"
import { ArticlesSection, ChooseUs, /*Features,*/HeroSection, OurServices } from "../layout/home"
import AOS from 'aos'
import "aos/dist/aos.css";
import "../layout/doctors/drs.css"
import { Link } from 'react-router-dom';




const Home = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (

    <div>

      <Header />



      <HeroSection />


      <main id="main">
        <section id="why-us" className="why-us">
          <div className="container" data-aos="fade-up">

            <div className="section-header">
              <h2>Why Choose Us</h2>

            </div>
            <div className="row g-0" data-aos="fade-up" data-aos-delay="200">


              <div className="col-lg-12 slides  position-center">

                <div className="slides-1 swiper">
                  <div className="swiper-wrapper">

                    <ChooseUs />
                  </div>
                </div>

              </div>
            </div>



          </div>
        </section>

        <OurServices />

        <ArticlesSection />


      </main>

      <Footer />


      <div>

        <Link to="." className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></Link>


      </div>
    </div>


  );
}

export default Home;
