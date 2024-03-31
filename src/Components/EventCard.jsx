import React from 'react';

const EventCard = ({ image, date, category, title }) => {
    return (
        <li>
            <div className="event-card has-before hover:shine">
                <div className="card-banner img-holder" style={{ '--width': 350, '--height': 450 }}>
                    <img src={image} width="350" height="450" loading="lazy" alt="Event" className="img-cover" />
                    <time className="publish-date label-2" dateTime={date}>{date}</time>
                </div>
                <div className="card-content">
                    <p className="card-subtitle label-2 text-center">{category}</p>
                    <h3 className="card-title title-2 text-center">{title}</h3>
                </div>
            </div>
        </li>
    );
};

export default EventCard;
