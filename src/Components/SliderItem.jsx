import React from 'react';

const SliderItem = ({ imageSrc, subtitle, title, text, buttonText }) => {
  return (
    <li className="slider-item active" data-hero-slider-item>
      <div className="slider-bg">
        <img src={imageSrc} width="1880" height="950" alt="" className="img-cover" />
      </div>
      <p className="label-2 section-subtitle slider-reveal">{subtitle}</p>
      <h1 className="display-1 hero-title slider-reveal">{title}</h1>
      <p className="body-2 hero-text slider-reveal">{text}</p>
      <a href="#" className="btn btn-primary slider-reveal">
        <span className="text text-1">{buttonText}</span>
        <span className="text text-2" aria-hidden="true">{buttonText}</span>
      </a>
    </li>
  );
};

export default SliderItem;
