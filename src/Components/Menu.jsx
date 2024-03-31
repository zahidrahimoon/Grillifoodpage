import React from 'react';
import MenuCard from './MenuCard';
import menu1 from '../assets/images/menu-1.png';
import menu2 from '../assets/images/menu-2.png';
import menu3 from '../assets/images/menu-3.png';
import menu4 from '../assets/images/menu-4.png';
import menu5 from '../assets/images/menu-5.png';
import menu6 from '../assets/images/menu-6.png';
import shape5 from '../assets/images/shape-5.png';
import shape6 from '../assets/images/shape-6.png';

const Menu = () => {
  return (
    <section className="section menu" aria-label="menu-label" id="menu">
      <div className="container">

        <p className="section-subtitle text-center label-2">Special Selection</p>

        <h2 className="headline-1 section-title text-center">Delicious Menu</h2>

        <ul className="grid-list">
          <MenuCard image={menu1} title="Greek Salad" price="$25.50" description="Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese." badge="Seasonal" />
          <MenuCard image={menu2} title="Lasagne" price="$40.00" description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices." />
          <MenuCard image={menu3} title="Butternut Pumpkin" price="$10.00" description="Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand." />
          <MenuCard image={menu4} title="Tokusen Wagyu" price="$39.00" description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices." badge="New" />
          <MenuCard image={menu5} title="Olivas Rellenas" price="$25.00" description="Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper." />
          <MenuCard image={menu6} title="Opu Fish" price="$49.00" description="Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices." />
        </ul>

        <p className="menu-text text-center">
          During winter daily from <span className="span">7:00 pm</span> to <span className="span">9:00 pm</span>
        </p>

        <a href="#" className="btn btn-primary">
          <span className="text text-1">View All Menu</span>

          <span className="text text-2" aria-hidden="true">View All Menu</span>
        </a>

        <img src={shape5} width="921" height="1036" loading="lazy" alt="shape"
          className="shape shape-2 move-anim" />
        <img src={shape6} width="343" height="345" loading="lazy" alt="shape"
          className="shape shape-3 move-anim" />

      </div>
    </section>
  );
}

export default Menu;