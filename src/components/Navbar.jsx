import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
export const Navbar = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <h1 className="m-0"><i className="fa fa-map-marker-alt me-3"></i>Travel Website</h1>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/Home" className="nav-item nav-link active">Home</Link>
              <Link to="/About" className="nav-item nav-link">About</Link>
              <Link to="/Services" className="nav-item nav-link">Services</Link>
              <Link to="/Blog" className="nav-item nav-link">Blog</Link>
              <Link to="/Contact" className="nav-item nav-link">Contact</Link>
            </div>
            <a href="/" className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4">Book Now</a>
          </div>
        </nav>
    </div>
  )
}
