import React from 'react';

const CardTextOnly = ({ cardTitle, cardText }) => {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    );
}

export default CardTextOnly;