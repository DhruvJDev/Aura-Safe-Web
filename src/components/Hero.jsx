import React from 'react';
import { Link } from 'react-router-dom';
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
                    Aura Safe is a simple safety app for women that helps with emergency support, trusted contacts, and quick access to help when it matters most.
                </p>
                <div className="cta-buttons">
                    <button className="btn btn-primary" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get Started Today
                    </button>
                    <Link to="/about" className="btn btn-secondary">Learn More</Link>
                </div>
            </div>
            <div className="hero-image">
                <img src={appIcon} alt="Aura Safe App" className="circular-logo" />
            </div>
        </section>
    );
};

export default Hero;
