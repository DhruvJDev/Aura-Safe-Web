import React from 'react';
import { Link } from 'react-router-dom';

const About = () =>
{
    return (
        <div className="page-container">
            <section className="page-content page-static">
                <h1>About Aura Safe</h1>
                <p>
                    Aura Safe is a women-based safety application built to make help faster, trusted contacts easier to manage, and emergency access simpler in stressful situations.
                </p>

                <h2>Why It Exists</h2>
                <p>
                    The app is designed around quick action. From one place, users can reach emergency support, share location details, and stay connected with people they trust.
                    It gives women a simple way to alert their trusted contacts when they feel unsafe or need immediate help.
                </p>

                <h2>How It Helps</h2>
                <p>
                    In situations like someone following them, harassment, or any other emergency, a user can send an instant alert message to their trusted contacts along with their current location.
                    That makes it easier for family members or close friends to respond quickly and provide support.
                </p>

                <h2>What You Get</h2>
                <ul>
                    <li>Emergency assistance when you need it most</li>
                    <li>Trusted contact management for fast response</li>
                    <li>Instant alert messages with live location sharing</li>
                    <li>Fast, simple access during unsafe situations</li>
                    <li>A clean interface with simple, easy-to-use actions</li>
                </ul>

                <p>
                    Learn more about the main features on the home page or jump straight to the download section to get started.
                    Aura Safe focuses on helping women stay connected, prepared, and supported whenever they need it most.
                </p>

                <div className="cta-buttons">
                    <Link to="/" className="btn btn-secondary">Back to Home</Link>
                    <Link to="/" state={{ scrollTo: 'download' }} className="btn btn-primary color-w">Get Started</Link>
                </div>
            </section>
        </div>
    );
};

export default About;