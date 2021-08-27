import React from 'react';

function Guarantee({ img,title, description}) {
   
    return (
        <div className='service'>
            <img src={img} alt="img"/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        )
}

export default Guarantee;
