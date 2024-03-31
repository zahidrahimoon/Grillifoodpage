import heroSlider1 from '../assets/images/hero-slider-1.jpg';
import heroSlider2 from '../assets/images/hero-slider-2.jpg';
import heroSlider3 from '../assets/images/hero-slider-3.jpg';
import heroicon from '../assets/images/hero-icon.png';
import SliderItem from './SliderItem';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

  
const Hero = () => {
  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        
      <SliderItem
        imageSrc={heroSlider1}
        subtitle="Tradational & Hygiene"
        title="For the love of delicious food"
        text="Come with family & feel the joy of mouthwatering food"
        buttonText="View Our Menu"
      />
      <SliderItem
        imageSrc={heroSlider2}
        subtitle="delightful experience"
        title="Flavors Inspired by the Seasons"
        text="Come with family & feel the joy of mouthwatering food"
        buttonText="View Our Menu"
      />
      <SliderItem
        imageSrc={heroSlider3}
        subtitle="amazing & delicious"
        title="Where every flavor tells a story"
        text="Come with family & feel the joy of mouthwatering food"
        buttonText="View Our Menu"
      />
      </ul>

      <button className="slider-btn prev" aria-label="slide to previous" data-prev-btn>
      <FiChevronLeft />
      </button>

      <button className="slider-btn next" aria-label="slide to next" data-next-btn>
      <FiChevronRight />
      </button>

      <a href="#" className="hero-btn has-after">
        <img src={heroicon} width="48" height="48" alt="booking icon" />
        <span className="label-2 text-center span">Book A Table</span>
      </a>  

    </section>
  );
}

export default Hero;
    