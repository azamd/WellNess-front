import React from "react";
import GLightbox from "glightbox";

const PortfolioItems =() =>{
  const [items] = ([
    {
      id: 1,
      delay: "100",
      color: "color: #f57813;",
      text01: 'Aliquid non alias minus',
      text02: 'Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.',
      text03: 'Neque voluptates aut. Soluta aut perspiciatis porro deserunt. Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur sequi sit laborum. Voluptas enim dolorum fugiat aut.'
    },
    {
      id: 2,
      delay: "200",
      color: "color: #f57813;",
      text01: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      text02: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      text03: 'example2'
    },
    {
      id: 3,
      delay: "300",
      color: "color: #d90769;",
      text01: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      text02: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      text03: 'example3'
    }
  ])

return(
  items.map(data =>(
<div class="col-lg-4 col-md-6 portfolio-item filter-app" key={data.id}>
              <img src="assets/img/portfolio/app-1.jpg" class="img-fluid" alt=""/>
              <div class="portfolio-info">
                <h4>{data.text03}</h4>
                <p>{data.text03}</p>
                <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
              </div>
            </div>))


)
};export default PortfolioItems;