import React from 'react';

function Hobby({ hobby,index }) {
   
    return (
        <h1 key={index}>{hobby}</h1>
        )
}

export default Hobby;
