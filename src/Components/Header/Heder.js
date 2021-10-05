import React from 'react';
import Menubar from '../Menubar/Menubar';
import './Header.css'

const Heder = () => {
    return (
        
        <div className="row banner">
        
        
           
                <div className="col-md-12">
                <Menubar></Menubar>

                <h1 className="text-light text">Let's Learn Programming <br /> With Us!!!!</h1>
                <h5 className="text-light">Create better
                    experiences in your Journey</h5>
                <button className="btn">See our work</button>

            </div>


        </div>
    );
};

export default Heder;