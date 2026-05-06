import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import appIcon from '../assets/app_icon.png';

const Header = () =>
{
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) =>
    {
        const element = document.getElementById(id);
        if (element)
        {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const goToSection = (id) => (e) =>
    {
        e.preventDefault();
        if (location.pathname !== '/')
        {
            navigate('/', { state: { scrollTo: id } });
            return;
        }

        scrollToSection(id);
    };

    const goHome = () =>
    {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/" className="logo" onClick={goHome}>
                    <img src={appIcon} alt="Aura Safe" className="circular-logo--small" />
                    <span className="brand">Aura Safe</span>
                </Link>
                <nav>
                    <a href="/" onClick={goToSection('features')}>
                        Features
                    </a>
                    <a href="/" onClick={goToSection('download')}>
                        Download
                    </a>
                    <Link to="/about">
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
