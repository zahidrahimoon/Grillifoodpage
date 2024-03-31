import React from 'react';
import FeatureItem from './FeatureItem';
import feature1 from '../assets/images/features-icon-1.png';
import feature2 from '../assets/images/features-icon-2.png';
import feature3 from '../assets/images/features-icon-3.png';
import feature4 from '../assets/images/features-icon-4.png';
import shape7 from '../assets/images/shape-7.png';
import shape8 from '../assets/images/shape-8.png';

const Features = () => {
    return (
        <section className="section features text-center" aria-label="features">
            <div className="container">
                <p className="section-subtitle label-2">Why Choose Us</p>
                <h2 className="headline-1 section-title">Our Strength</h2>
                <ul className="grid-list">
                    <FeatureItem
                        icon={feature1}
                        title="Hygienic Food"
                        description="Lorem Ipsum is simply dummy printing and typesetting."
                    />
                    <FeatureItem
                        icon={feature2}
                        title="Fresh Environment"
                        description="Lorem Ipsum is simply dummy printing and typesetting."
                    />
                    <FeatureItem
                        icon={feature3}
                        title="Skilled Chefs"
                        description="Lorem Ipsum is simply dummy printing and typesetting."
                    />
                    <FeatureItem
                        icon={feature4}
                        title="Event & Party"
                        description="Lorem Ipsum is simply dummy printing and typesetting."
                    />
                </ul>
                <img src={shape7} width="208" height="178" loading="lazy" alt="shape" className="shape shape-1" />
                <img src={shape8} width="120" height="115" loading="lazy" alt="shape" className="shape shape-2" />
            </div>
        </section>
    );
};

export default Features;
