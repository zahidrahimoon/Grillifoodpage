import React from 'react';

const MenuCard = ({ image, title, price, description, badge }) => {
  return (
    <li>
      <div className="menu-card hover:card">
        <figure className="card-banner img-holder" style={{ '--width': 100, '--height': 100 }}>
          <img src={image} width="100" height="100" loading="lazy" alt={title} className="img-cover" />
        </figure>
        <div>
          <div className="title-wrapper">
            <h3 className="title-3">
              <a href="#" className="card-title">{title}</a>
            </h3>
            {badge && <span className="badge label-1">{badge}</span>}
            <span className="span title-2">{price}</span>
          </div>
          <p className="card-text label-1">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}

export default MenuCard;