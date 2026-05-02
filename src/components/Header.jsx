import React from 'react';

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
        <header>
            <div className="header-content">
                <div className="logo">
                    <img src="/app_icon.png" alt="Aura Safe" />
                    Aura Safe
                </div>
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
