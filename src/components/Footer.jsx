import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () =>
{
    return (
        <footer id="about">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/contact">Contact Us</Link>
                    <Link to="/support">Support</Link>
                </div>
                <p>&copy; 2026 Aura Safe. All rights reserved. | Your security is our priority.</p>
            </div>
        </footer>
    );
};

export default Footer;
