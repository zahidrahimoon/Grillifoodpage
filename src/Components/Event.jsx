import React from 'react';
import EventCard from './EventCard';
import event1 from '../assets/images/event-1.jpg';
import event2 from '../assets/images/event-2.jpg';
import event3 from '../assets/images/event-3.jpg';

const Event = () => {
    return (
        <section className="section event bg-black-10" aria-label="event">
            <div className="container">

                <p className="section-subtitle label-2 text-center">Recent Updates</p>
                <h2 className="section-title headline-1 text-center">Upcoming Event</h2>
                <ul className="grid-list">
                    <EventCard
                        image={event1}
                        date="15/09/2022"
                        category="Food, Flavour"
                        title="Flavour so good you’ll try to eat with your eyes."
                    />
                    <EventCard
                        image={event2}
                        date="08/09/2022"
                        category="Healthy Food"
                        title="Flavour so good you’ll try to eat with your eyes."
                    />
                    <EventCard
                        image={event3}
                        date="03/09/2022"
                        category="Recipe"
                        title="Flavour so good you’ll try to eat with your eyes."
                    />
                </ul>

                <a href="#" className="btn btn-primary">
                    <span className="text text-1">View Our Blog</span>
                    <span className="text text-2" aria-hidden="true">View Our Blog</span>
                </a>

            </div>
        </section>
    );
};

export default Event;
