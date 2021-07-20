import React from 'react';

const FeaturedItem = ({ cardSubtitle, cardTitle, cardText, imagePath }) => {
    return (
        <div className="card h-100">
            <div className="card-body">
                <img src={imagePath} className="img-fluid h-75 pb-4" alt="..."></img>
                <h6 className="card-title">{cardTitle}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{cardSubtitle}</h6>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    );
}

export default FeaturedItem;