import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Routine from '../Routine/Routine'
import './Instrument.css';

const Instrument = () => {
    const [infos, setInfos] = useState([]);
    const [time, setTime] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfos(data))
    }, []);
    const handleAddToList = (info) => {
        const newTime = [...time.info]
        newTime(setTime)
    }
    return (
        <div>
            <h2 className='title'>Select Todays Exercise</h2>
            <div className='instrument-container'>
                <div className="item-container">
                    {
                        infos.map(info => <Details
                            key={info.id}
                            info={info}
                            handleAddToList={handleAddToList}
                        ></Details>)
                    }
                </div>
                {/* routine container starts */}

                <div className="routine-container">
                    <Routine></Routine>
                </div>

                {/* routine container end */}

            </div>
        </div>
    );
};

export default Instrument;