import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/programming-languages.png'
import './Menubar.css'

const Menubar = () => {
    return (
        <div className="Menu-bar">
            <div className="container">
            <div className="row">
            <div className="col-md-2">
                <div className="mt-2">
                <img src={logo} alt="" />
                </div>
              
            </div>
            <div className="menu-container">
            <div className="col-md-10 ms-5">
            
            <div className="menu-container">
              <ul className="d-flex align-items-end justify-content-end ">

                  <Link to="/home" className="items">
                  <li >Home</li>
                  </Link>
                
                  
                
                <Link to="/services" className="items"><li>Services</li>
                           </Link>
              
                  <Link to="/about" className="items" > <li >About us</li>
                  </Link>

                  
                  <Link to="contact" className="items" >
                  <li>Contact us</li>
                  </Link>
               
                  
                
              </ul>
            </div>
          </div>
                

            </div>
            </div>
        </div>
            </div>
       
    );
};

export default Menubar;