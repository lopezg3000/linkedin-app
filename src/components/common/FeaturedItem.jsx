import React from 'react';

const FeaturedItem = ({ cardTitle, cardSubtitle, cardText, imagePath }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <img src={imagePath} className="img-fluid h-25" alt="..."></img>
                <h6 className="card-subtitle mb-2 text-muted">{cardSubtitle}</h6>
                <p className="card-text">{cardText}</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    );
}

export default FeaturedItem;