import React from 'react';
import './Routine.css'

const Routine = (props) => {
    const { time } = props;
    console.log(time)
    return (
        <div className='routine'>
            <div className='name-container'>
                <h2>Mamun Rashid</h2>
                <p>Bhola, Bangladesh</p>
            </div>
            <div className='individual-info'>

                <div className='item'>
                    <h3>75 <small>kg</small> <br /> <small>Weight</small></h3>
                </div>
                <div className='item'>
                    <h3>6.5 <br /> <small>Height</small> </h3>
                </div>
                <div className='item'>
                    <h3>25 <small>Yrs <br />  Age</small></h3>
                </div>
            </div>
            {/* break info button */}
            <div>
                <h2>Add a Break</h2>
                <div className='btn-break-container'>
                    <button className='btn-break'>
                        <p>10s</p>
                    </button>
                    <button className='btn-break'>
                        <p>20s</p>
                    </button>
                    <button className='btn-break'>
                        <p>30s</p>
                    </button>
                    <button className='btn-break'>
                        <p>40s</p>
                    </button>
                    <button className='btn-break'>
                        <p>50s</p>
                    </button>
                </div>
            </div>

            {/* excercise detauisls */}
            <div>
                <h2>Excercise Details</h2>
            </div>
            <div className='excercise-details'>
                <h2>Excercise Time</h2>
                <h2><small className='time'>200sec</small></h2>
            </div>
            <div className='excercise-details'>
                <h2>Break Time</h2>
                <h2><small className='time'>0sec</small></h2>
            </div>

            {/* activity button */}
            <div>
                <button className='btn-activity'>
                    <p>Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default Routine;