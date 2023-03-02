import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';
import AOS from'aos';


   export default function CallToAction() {
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
   
   <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h3>Ut fugiat aliquam aut non</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <Link to='' className="cta-btn">Call To Action</Link>
          </div>
        </div>

      </div>
    </section>}