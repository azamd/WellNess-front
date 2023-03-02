import React from "react";
import { Link } from 'react-router-dom';


const SideTags = () =>{
return(

<div className="sidebar-item tags">
                <h3 className="sidebar-title">Tags</h3>
                <ul className="mt-3">
                  <li><Link to=''>App</Link></li>
                  <li><Link to=''>IT</Link></li>
                  <li><Link to=''>Business</Link></li>
                  <li><Link to=''>Mac</Link></li>
                  <li><Link to=''>Design</Link></li>
                  <li><Link to=''>Office</Link></li>
                  <li><Link to=''>Creative</Link></li>
                  <li><Link to=''>Studio</Link></li>
                  <li><Link to=''>Smart</Link></li>
                  <li><Link to=''>Tips</Link></li>
                  <li><Link to=''>Marketing</Link></li>
                </ul>
              </div>

);
};
export default SideTags;