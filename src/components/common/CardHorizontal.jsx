import React from 'react';

const Card = ({ imagePath, cardTitle, darkCardText, firstLightCardText, secondLightCardText }) => {
    return (
        <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={imagePath} className="img-fluid rounded-start" alt="..." />

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{cardTitle}</h5>
                        <p className="card-text">{darkCardText}</p>
                        <p className="card-text"><small className="text-muted">{firstLightCardText}</small></p>
                        <p className="card-text"><small className="text-muted">{secondLightCardText}</small></p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Card;