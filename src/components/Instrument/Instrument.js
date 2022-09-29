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
                <div className="routine-container">
                    <h2>Mamun Rashid</h2>
                </div>
            </div>
        </div>
    );
};

export default Instrument;