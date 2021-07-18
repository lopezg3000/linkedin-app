import React from 'react';

const cardVertical = ({ cardTitle, cardText, breadCrumbItemOne, breadCrumbItemTwo }) => {
    return (
        <div className="card" style="width: 18rem;">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardText}</p>
                <div style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">{breadCrumbItemOne}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{breadCrumbItemTwo}</li>
                    </ol>
                </div>
                <a href="#" className="card-link">Card link</a>
            </div>
        </div>
    );
}

export default cardVertical;