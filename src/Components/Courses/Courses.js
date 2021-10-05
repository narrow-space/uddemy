import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Heder from '../Header/Heder';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('./language.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (

        <>
        
        <Heder></Heder>

        <h1 className="text">This is Our<span className="color-change">All Courses!! 
            </span></h1>
        

         

        <div className="container my-5">


            <div className="row">
                {

                    courses.map(course => <Course key={course.id} course={course}></Course>)

                }
            </div>
            
        </div>
        <Footer></Footer>
        </>

    );
};

export default Courses;