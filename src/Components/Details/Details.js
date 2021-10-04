import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';

const Details = () => {
    const [details,setDetails] = useState([])
    useEffect(() => {
        fetch('./language.json')
            .then(res => res.json())
            .then(data => setDetails(data.slice(0,4)))
    }, [])
    return (
        <div className="container my-5">

        
       <div className="row">
           {
                
                details.map(detail=><Detail key={detail.id} detail={detail}></Detail>)
                     
           }
       </div>
       </div>
    );
};

export default Details;