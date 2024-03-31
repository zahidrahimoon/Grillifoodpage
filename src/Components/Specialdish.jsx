import React from 'react';
import specialbanner from '../assets/images/special-dish-banner.jpg';
import badge1 from '../assets/images/badge-1.png';
import shape4 from '../assets/images/shape-4.png';
import shape9 from '../assets/images/shape-9.png';

const Specialdish = () => {
  return (
    <section className="special-dish text-center" aria-labelledby="dish-label">

      <div className="special-dish-banner">
        <img src={specialbanner} width="940" height="900" loading="lazy" alt="special dish"
          className="img-cover" />
      </div>

      <div className="special-dish-content bg-black-10">
        <div className="container">

          <img src={badge1} width="28" height="41" loading="lazy" alt="badge" className="abs-img" />

          <p className="section-subtitle label-2">Special Dish</p>

          <h2 className="headline-1 section-title">Lobster Tortellini</h2>

          <p className="section-text">
            Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
            industrys standard dummy text ever since the when an unknown printer took a galley of type.
          </p>

          <div className="wrapper">
            <del className="del body-3">$40.00</del>

            <span className="span body-1">$20.00</span>
          </div>

          <a href="#" className="btn btn-primary">
            <span className="text text-1">View All Menu</span>

            <span className="text text-2" aria-hidden="true">View All Menu</span>
          </a>

        </div>
      </div>

      <img src={shape4} width="179" height="359" loading="lazy" alt="" className="shape shape-1" />

      <img src={shape9} width="351" height="462" loading="lazy" alt="" className="shape shape-2" />

    </section>
  );
}

export default Specialdish;
