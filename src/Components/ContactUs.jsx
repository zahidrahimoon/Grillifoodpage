import React from 'react';
import Reservation from './Reservation';

const ContactUs = () => {
    return (
        <section className="reservation" id='contact'>
            <div className="container">
                <div className="form reservation-form bg-black-10">
                 <Reservation />
                    <div className="form-right text-center">
                        <h2 className="headline-1 text-center">Contact Us</h2>
                        <p className="contact-label">Booking Request</p>
                        <a href="tel:+88123123456" className="body-1 contact-number hover-underline">+88-123-123456</a>
                        <div className="separator"></div>
                        <p className="contact-label">Location</p>
                        <address className="body-4">
                            Restaurant St, Delicious City, <br />
                            London 9578, UK
                        </address>
                        <p className="contact-label">Lunch Time</p>
                        <p className="body-4">
                            Monday to Sunday <br />
                            11.00 am - 2.30pm
                        </p>
                        <p className="contact-label">Dinner Time</p>
                        <p className="body-4">
                            Monday to Sunday <br />
                            05.00 pm - 10.00pm
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
