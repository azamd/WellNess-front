import React from 'react'
import{Link} from 'react-router-dom'
import NavBar from './NavBar'

export default function Header() {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/Home" className="logo d-flex align-items-center">
      
        <img src="assets/img/logo.png" alt=""/> 
        <h1 className="d-flex align-items-center">Wellness</h1>
      </Link>

      <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

     <NavBar/>

    </div>
  </header>

        
    
  )
}
