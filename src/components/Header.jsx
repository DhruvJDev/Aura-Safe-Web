import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import appIcon from '../assets/app_icon.png';

const Header = () =>
{
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

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
        setMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const closeMenu = () =>
    {
        setMenuOpen(false);
    };

    return (
        <header className="site-header">
            <div className="header-content">
                <Link to="/" className="logo" onClick={goHome}>
                    <img src={appIcon} alt="Aura Safe" className="circular-logo--small" />
                    <span className="brand">Aura Safe</span>
                </Link>
                <button
                    type="button"
                    className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(value => !value)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <nav className={menuOpen ? 'nav-open' : ''}>
                    <a href="/" onClick={(e) => { goToSection('features')(e); closeMenu(); }}>
                        Features
                    </a>
                    <a href="/" onClick={(e) => { goToSection('download')(e); closeMenu(); }}>
                        Download
                    </a>
                    <Link to="/about" onClick={closeMenu}>
                        About
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
