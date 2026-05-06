import React from 'react';
import { Link } from 'react-router-dom';
import appIcon from '../assets/app_icon.png';

const Header = () =>
{
    const scrollToSection = (id) =>
    {
        const element = document.getElementById(id);
        if (element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/" className="logo">
                    <img src={appIcon} alt="Aura Safe" className="circular-logo--small" />
                    <span className="brand">Aura Safe</span>
                </Link>
                <nav>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>
                        Features
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('download'); }}>
                        Download
                    </a>
                    <a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
                        About
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
