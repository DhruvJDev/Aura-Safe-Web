import React from 'react';

const Hero = () =>
{
    return (
        <section className="hero">
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
                <img src="./app_icon.png" alt="Aura Safe App" />
            </div>
        </section>
    );
};

export default Hero;
