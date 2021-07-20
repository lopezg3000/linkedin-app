import React from 'react';


const TrainingSummary = ({ imagePath, headline }) => {
    return (
        <div className='d-flex justify-content-start p-2'>
            <img style={{ width: '25px', height: '25px' }} src={imagePath} />
            <h6 className='ms-2 my-auto' >{headline}</h6>
        </div>
    );
}

export default TrainingSummary;