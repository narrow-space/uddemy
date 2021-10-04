import React from 'react';
import Footer from '../Footer/Footer';
import Heder from '../Header/Heder';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Heder/>
            <div className="row contact">
                <div className="col-md-12">
                    <div>
                    <i class="fas fa-map-marker-alt"></i>
                    <h4>Adress</h4>
                    <p>184 Collins Street West Victoria,United States</p>
                   
                    
                    <i class="fas fa-envelope"></i>
                    <h4>Email</h4>
                    <p>Support@education.com</p>
                    <p>Info@education.com</p>
                    </div>
                    <div>
                    <i class="fas fa-phone-alt"></i>
                    <p>+44 4487 5987</p>
                    <p>+44 4487 7647</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;