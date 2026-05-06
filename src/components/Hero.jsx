import React from 'react';
import { Link } from 'react-router-dom';
import appIcon from '../assets/app_icon.png';

const Hero = () =>
{
    return (
        <section className="hero animate-zoom">
            <div className="hero-content">
                <p className="hero-eyebrow">Women Safety App</p>
                <h1>
                    Stay protected with <span className="highlight">Aura Safe</span>
                </h1>
                <p>
                    Aura Safe helps women share trusted contacts, send emergency alerts, and quickly share their current location when they need support.
                </p>
                <div className="cta-buttons">
                    <button className="btn btn-primary" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                        Shop Now
                    </button>
                    <Link to="/about" className="btn btn-secondary">About</Link>
                </div>
            </div>
            <div className="hero-image">
                <div className="hero-visual-card">
                    <div className="hero-visual-ring" aria-hidden="true" />
                    <img src={appIcon} alt="Aura Safe App" className="circular-logo hero-visual-image" />
                    <div className="hero-visual-badge hero-visual-badge--top">24/7 Protection</div>
                    <div className="hero-visual-badge hero-visual-badge--bottom">Trusted Contacts</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
