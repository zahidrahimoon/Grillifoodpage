import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const [currentSlidePos, setCurrentSlidePos] = useState(0);
  const heroSliderItems = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
  ];

  const updateSliderPos = () => {
    const lastActiveSliderItem = heroSliderItems[currentSlidePos];
    const updatedItems = heroSliderItems.map((item) =>
      item.id === lastActiveSliderItem.id
        ? { ...item, active: true }
        : { ...item, active: false }
    );
    setHeroSliderItems(updatedItems);
  };

  const slideNext = () => {
    if (currentSlidePos >= heroSliderItems.length - 1) {
      setCurrentSlidePos(0);
    } else {
      setCurrentSlidePos(currentSlidePos + 1);
    }
    updateSliderPos();
  };

  const slidePrev = () => {
    if (currentSlidePos <= 0) {
      setCurrentSlidePos(heroSliderItems.length - 1);
    } else {
      setCurrentSlidePos(currentSlidePos - 1);
    }
    updateSliderPos();
  };

  const autoSlide = () => {
    const interval = setInterval(() => {
      slideNext();
    }, 7000);
    return () => clearInterval(interval);
  };

  useEffect(autoSlide, []);

  return (
    <div className="hero-slider">
      {heroSliderItems.map((item) => (
        <div
          key={item.id}
          className={`hero-slider-item ${item.active ? "active" : ""}`}
        >
          {item.content}</div>
      ))}
      <button data-prev-btn onClick={slidePrev}>
        Prev
      </button>
      <button data-next-btn onClick={slideNext}>
        Next
      </button>
    </div>
  );
};

export default HeroSlider;