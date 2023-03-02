import React from 'react'
import { Link } from 'react-router-dom';
import './general.css'


export default function Footer() {
    return ( 

<footer className="footer"> 

<div className="footer-content">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <Link to='index.html' className="logo d-flex align-items-center">
              <span>Wellness</span>
            </Link>
            <p>Wellness is an E-Health platform that aims to link patients with the finest doctors and experts to offer quality medical services, useful tips and interesting articles, therefore your health and well-being is our mission and priority.   </p>
            <div className="social-links d-flex  mt-3">
              <Link to="" className="twitter"><i className="bi bi-twitter"></i></Link>
              <Link to="" className="facebook"><i className="bi bi-facebook"></i></Link>
              <Link to="" className="instagram"><i className="bi bi-instagram"></i></Link>
              <Link to="" className="linkedin"><i className="bi bi-linkedin"></i></Link>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bi bi-dash"></i> <Link to="/Home">Home</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/About">About Us</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/Services">Services</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/Doctors">Doctors</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/Articles">Articles</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/Forum">Forum</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/Contact">Contact Us</Link></li>



            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i className="bi bi-dash"></i> <Link to="/Doctors">Medical assistance</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/Articles">Health tips & articles</Link></li>
              <li><i className="bi bi-dash"></i> <Link to="/Forum">Forum</Link></li>

            </ul>
          </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Get In Touch</h4>
                <p>
                   somewhere,<br/>
                  Tunis,<br/>
                  Tunisia<br/><br/>
                  <strong>Phone:</strong> +216 29 267 794<br/>
                  <strong>Email:</strong> mohamedaziz.amdouni99@gmail.com<br/>
                </p>

            </div>

        </div>
      </div>
    </div>


    <div className="footer-legal">
      <div className="container">
        <div className="copyright">
          &copy; Copyright <strong><span>Aziz Amdouni</span></strong>. All Rights Reserved
        </div>
        <div className="credits">

        </div>
      </div>
    </div>

    

</footer>

    )
    
}