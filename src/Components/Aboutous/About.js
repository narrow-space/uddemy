import React from 'react';
import Footer from '../Footer/Footer';
import Heder from '../Header/Heder';
import './About.css'
import logo from '../../images/banner.jpg'

const About = () => {
    return (
        <div >
            <Heder></Heder>
            <div className="row bg-dark">
                <div className="col-md-6">
                <img className="w-100" src={logo} alt="" />
                </div>
                <div className="col-md-6">
                    <div  className="mt-5">
                    <h2 className="text-light">Programming Language is Next Genaration language.You Should learn programming.</h2>
                    <p className="text-light">We can teach You diffrent kind of programming language.You should learn whatever you want!!!</p>
                    </div>
                    
                </div>
            </div>
           
            
            
           
            <Footer></Footer>
        </div>
    );
};

export default About;