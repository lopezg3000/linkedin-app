import React from 'react';

const Card = ({ imagePath, cardTitle, darkCardText, firstLightCardText, secondLightCardText }) => {
    return (
        <div className="card border-0 ps-3 pt-2">
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={imagePath} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-10">
                    <div className="card-body pb">
                        <h6 className="card-title">{cardTitle}</h6>
                        <p className="card-text mb-1">{darkCardText}</p>
                        <p className="card-text mb-1"><small className="text-muted">{firstLightCardText}</small></p>
                        <p className="card-text mb-1"><small className="text-muted">{secondLightCardText}</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;