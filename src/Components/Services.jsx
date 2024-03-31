import React from 'react';
import ServiceCard from './ServiceCard';
import service1 from '../assets/images/service-1.jpg';
import service2 from '../assets/images/service-2.jpg';
import service3 from '../assets/images/service-3.jpg';
import shape1 from '../assets/images/shape-1.png';
import shape2 from '../assets/images/shape-2.png';

const Services = () => {
  return (
    <section className="section service bg-black-10 text-center" aria-label="service" id='service'>
      <div className="container">

        <p className="section-subtitle label-2">Flavors For Royalty</p>

        <h2 className="headline-1 section-title">We Offer Top Notch</h2>

        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys
          standard dummy text ever.
        </p>

        <ul className="grid-list">
          <ServiceCard title="Breakfast" description="View Menu" image={service1} />
          <ServiceCard title="Appetizers" description="View Menu" image={service2} />
          <ServiceCard title="Drinks" description="View Menu" image={service3} />
        </ul>

        <img src={shape1} width="246" height="412" loading="lazy" alt="shape"
          className="shape shape-1 move-anim" />
        <img src={shape2} width="343" height="345" loading="lazy" alt="shape"
          className="shape shape-2 move-anim" />

      </div>
    </section>
  );
}

export default Services;