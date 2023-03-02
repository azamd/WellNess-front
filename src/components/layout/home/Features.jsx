import React from 'react'
import { useState } from 'react';


const Features = () => {

  const [features, /*setFeatures*/] = useState([
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



  return (

    features.map(data => (
      <div className="col-md-6" key={data.id}>
        <div className="icon-list d-flex">
          <i className="ri-store-line" style={{ color: "#d90769" }} ></i>
          <span>{data.text03}</span>
        </div>
      </div>
    ))





  );

}; export default Features;