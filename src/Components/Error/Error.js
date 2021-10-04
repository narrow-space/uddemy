import React from 'react';
import logo from '../../images/not_found-c30e2e7521854866230a7626a306b9e5.png'
import Footer from '../Footer/Footer';
import Heder from '../Header/Heder';

const Error = () => {
    return (
        <div>
            <Heder/>
            <h1 className="text-danger">Error,404 not found</h1>
            <img className="w-50" src={logo} alt="" />
            <Footer></Footer>
        </div>
    );
};

export default Error;