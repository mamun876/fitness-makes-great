import React from 'react';
import './Details.css'

const Details = (props) => {
    const { title, picture, paragraph, age, time } = (props.info)
    return (
        <div className='details'>
            <img src={picture} alt="" />
            <div className='details-text'>
                <h2>{title}</h2>
                <p>{paragraph}</p>
                <p><small>For Age:{age}</small></p>
                <p><small>Time Required:{time}</small></p>
            </div>
        </div>
    );
};

export default Details;