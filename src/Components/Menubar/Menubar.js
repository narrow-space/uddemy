import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/programming-languages.png'
import './Menubar.css'

const Menubar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        
        <button className="navbar-toggler btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a className="navbar-brand" href="/home"><img className="logo" src={logo} alt="" /></a>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <Link className="link" to="/home">
            <li className="nav-item ">
              Home
              
            </li>
            </Link>
            <Link className="link" to="/services">
            <li className="nav-item ">
              Services
              
            </li>
            </Link>
            <Link className="link" to="/about">
            <li className="nav-item">
              About us
              
            </li>
            </Link>
            <Link className="link" to="/contact">
            <li className="nav-item">
             Contact us
              
            </li>
            </Link>
            
            
            
          </ul>
          
        </div>
      </div>
    </nav>
       
    );
};

export default Menubar;