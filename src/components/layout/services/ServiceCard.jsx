import React from "react";
const ServiceCard =()=>{
    return(
        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-briefcase" style={{color: "#d90769"}}></i></div>
            <div>
              <h4 className="title"><a href="#" className="stretched-link">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>
          
    );
};export default ServiceCard;