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
                <h5>For Age: {age}</h5>
                <h5>Time Required: {time}</h5>
                <button className='btn-addToList'>
                    <p>Add to List</p>
                </button>
            </div>

        </div>
    );
};

export default Details;