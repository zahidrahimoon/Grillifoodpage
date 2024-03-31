import React from 'react';

const ServiceCard = ({ title, description, image }) => {
  return (
    <li>
      <div className="service-card">
        <a href="#" className="has-before hover:shine">
          <figure className="card-banner img-holder" style={{ '--width': 285, '--height': 336 }}>
            <img src={image} width="285" height="336" loading="lazy" alt={title} className="img-cover" />
          </figure>
        </a>
        <div className="card-content">
          <h3 className="title-4 card-title">
            <a href="#">{title}</a>
          </h3>
          <a href="#" className="btn-text hover-underline label-2">{description}</a>
        </div>
      </div>
    </li>
  );
}

export default ServiceCard;