import React from 'react';

const FeatureItem = ({ icon, title, description }) => {
    return (
        <li className="feature-item">
            <div className="feature-card">
                <div className="card-icon">
                    <img src={icon} width="100" height="80" loading="lazy" alt="icon" />
                </div>
                <h3 className="title-2 card-title">{title}</h3>
                <p className="label-1 card-text">{description}</p>
            </div>
        </li>
    );
};

export default FeatureItem;
