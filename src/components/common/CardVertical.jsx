import React from 'react';

const cardVertical = ({ imagePath, cardTitle, cardText, breadCrumbItemOne, breadCrumbItemTwo, cardFooter }) => {
    return (
        <div className="card" style={{ width: '30rem' }}>
            <img src={imagePath} className="card-img-top rounded-circle img-thumbnail w-50" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>

                {/* breadcrumb underneath */}

                <div aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">{breadCrumbItemTwo}</li>
                        <i className='bi bi-dot'></i>
                        <li className="breadcrumb-item"><a href="#">{breadCrumbItemOne}</a></li>
                    </ol>
                </div>

                {/* breadcrumb above */}

                <a href="#" className="card-link">{cardFooter}</a>
            </div>
        </div>
    );
}

export default cardVertical;