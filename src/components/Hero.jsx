import React from 'react';
import appIcon from '../assets/app_icon.png';

const Hero = () =>
{
    return (
        <section className="hero animate-zoom">
            <div className="hero-content">
                <h1>
                    Women's <span className="highlight">Safety</span> Companion
                </h1>
                <p>
                    Aura Safe is a modern, user-friendly women safety app that provides immediate emergency assistance and support. The app combines multiple features to ensure quick response in critical situations and maintains a network of trusted contacts.
                </p>
                <div className="cta-buttons">
                    <button className="btn btn-primary">
                        Get Started Today
                    </button>
                    <button className="btn btn-secondary">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="hero-image">
                <img src={appIcon} alt="Aura Safe App" className="circular-logo" />
            </div>
        </section>
    );
};

export default Hero;
