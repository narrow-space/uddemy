import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="row footer">
                <div className="col-md-12">
                    <h5 className="title mt-5">Get The Latest Offers</h5>
                    <h2 className="title-1">Subscribe TO Newsletter</h2>
                    <input className="input-field" type="text" placeholder="email@gmail.com" /><br />
                    <button className="send-btn">Send</button>
                    <div className="icons">
                        <div className="icon" ><i class="fab fa-facebook-square"></i></div>
                        <div className="icon" ><i class="fab fa-twitter"></i></div>
                        <div className="icon" ><i class="fas fa-volleyball-ball"></i></div>
                        <div className="icon" ><i class="fab fa-linkedin-in"></i></div>
                        <div className="icon" ><i class="fab fa-instagram"></i></div>


                    </div>
                    <div>
                        <ul className="item">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Tickets</li>
                        </ul>
                        <ul className="item">
                            <li>Schedule</li>
                            <li>Venue</li>
                        </ul>
                        <p className="copyright">Copyright © 2021. All Rights Reserved.
 </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;