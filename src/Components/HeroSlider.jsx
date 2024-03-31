import React, { useRef, useEffect, useState } from 'react';
import SliderItem from './SliderItem';
import heroSlider1 from '../assets/images/hero-slider-1.jpg';
import heroSlider2 from '../assets/images/hero-slider-2.jpg';
import heroSlider3 from '../assets/images/hero-slider-3.jpg';

const HeroSlider = () => {
  const heroSliderRef = useRef(null);
  const heroSliderItemsRef = useRef([]);
  const heroSliderPrevBtnRef = useRef(null);
  const heroSliderNextBtnRef = useRef(null);

  const [currentSlidePos, setCurrentSlidePos] = useState(0);

  const updateSliderPos = () => {
    const newActiveSliderItem = heroSliderItemsRef.current[currentSlidePos];
    heroSliderItemsRef.current.forEach((item) => item.classList.remove('active'));
    newActiveSliderItem.classList.add('active');
  };

  const slideNext = () => {
    if (currentSlidePos >= heroSliderItemsRef.current.length - 1) {
      setCurrentSlidePos(0);
    } else {
      setCurrentSlidePos(currentSlidePos + 1);
    }

    updateSliderPos();
  };

  const slidePrev = () => {
    if (currentSlidePos <= 0) {
      setCurrentSlidePos(heroSliderItemsRef.current.length - 1);
    } else {
      setCurrentSlidePos(currentSlidePos - 1);
    }

    updateSliderPos();
  };

  useEffect(() => {
    heroSliderItemsRef.current = heroSliderRef.current.querySelectorAll('[data-hero-slider-item]');
    heroSliderPrevBtnRef.current = heroSliderRef.current.querySelector('[data-prev-btn]');
    heroSliderNextBtnRef.current = heroSliderRef.current.querySelector('[data-next-btn]');

    heroSliderNextBtnRef.current.addEventListener('click', slideNext);
    heroSliderPrevBtnRef.current.addEventListener('click', slidePrev);

    let autoSlideInterval;

    const autoSlide = () => {
      autoSlideInterval = setInterval(slideNext, 7000);
    };

    document.addEventOnElements([heroSliderNextBtnRef.current, heroSliderPrevBtnRef.current], 'mouseover', () => {
      clearInterval(autoSlideInterval);
    });

    addEventOnElements([heroSliderNextBtnRef.current, heroSliderPrevBtnRef.current], 'mouseout', autoSlide);

    window.addEventListener('load', autoSlide);

    return () => {
      heroSliderNextBtnRef.current.removeEventListener('click', slideNext);
      heroSliderPrevBtnRef.current.removeEventListener('click', slidePrev);
      clearInterval(autoSlideInterval);
      window.removeEventListener('load', autoSlide);
    };
  }, []);

  return (
    <div className="hero-slider" data-hero-slider ref={heroSliderRef}>
      <button className="slider-btn prev" data-prev-btn ref={heroSliderPrevBtnRef}>
        <ion-icon name="chevron-back"></ion-icon>
      </button>

      <button className="slider-btn next" data-next-btn ref={heroSliderNextBtnRef}>
        <ion-icon name="chevron-forward"></ion-icon>
      </button>

      <div className="hero-slider-item active" data-hero-slider-item>
        {/* Slide content goes here */}
        <SliderItem
          imageSrc={heroSlider2}
          subtitle="Tradational & Hygiene"
          title="For the love of delicious food"
          text="Come with family & feel the joy of mouthwatering food"
          buttonText="View Our Menu"
        />
      </div>
      <div className="hero-slider-item" data-hero-slider-item>
        {/* Slide content goes here */}
          <SliderItem
            imageSrc={heroSlider3}
            subtitle="Tradational & Hygiene"
            title="For the love of delicious food"
            text="Come with family & feel the joy of mouthwatering food"
            buttonText="View Our Menu"
          />
      </div>
      <div className="hero-slider-item" data-hero-slider-item>
      <SliderItem
        imageSrc={heroSlider1}
        subtitle="Tradational & Hygiene"
        title="For the love of delicious food"
        text="Come with family & feel the joy of mouthwatering food"
        buttonText="View Our Menu"
      />
      </div>
    </div>
  );
};

export default HeroSlider;