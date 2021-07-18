import React from 'react';


const TrainingSummary = ({ imagePath, headline }) => {
    return (
        <div>
            <img src={imagePath} />
            <h3>{headline}</h3>
        </div>
    );
}

export default TrainingSummary;