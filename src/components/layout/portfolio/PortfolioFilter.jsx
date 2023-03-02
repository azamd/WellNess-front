import React from "react";

const PortfolioFilter =() =>{

    return(

<ul className="portfolio-flters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-product">Product</li>
            <li data-filter=".filter-branding">Branding</li>
            <li data-filter=".filter-books">Books</li>
          </ul>

);
}; export default PortfolioFilter;