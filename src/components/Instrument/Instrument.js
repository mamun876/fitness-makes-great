import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import './Instrument.css';

const Instrument = () => {
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, [])
    return (
        <div>
            <h2>Select Todays Exercise</h2>
            <div className='instrument-container'>
                <div className="item-container">
                    {
                        infos.map(info => <Details
                            key={info.id}
                            info={info}
                        ></Details>)
                    }
                </div>
                {/* routine container starts */}

                <div className="routine-container">
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
                    {/* break info */}
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
                        <h2><small className='time'>15sec</small></h2>
                    </div>

                    {/* activity button */}
                    <div>
                        <button className='btn-activity'>
                            <p>Activity Completed</p>
                        </button>
                    </div>
                </div>

                {/* routine container end */}

            </div>
        </div>
    );
};

export default Instrument;