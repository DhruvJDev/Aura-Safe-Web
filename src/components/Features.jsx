import React from 'react';

const Features = () =>
{
    const features = [
        {
            icon: '🆘',
            title: 'One-Touch Emergency SOS',
            description: 'Quick emergency alert button that instantly notifies your trusted contacts with your real-time location.'
        },
        {
            icon: '👥',
            title: 'Trusted Contacts Network',
            description: 'Build a network of trusted family and friends who receive instant alerts and can track your location when needed.'
        },
        {
            icon: '📍',
            title: 'Live Location Sharing',
            description: 'Share your real-time location with trusted contacts during emergencies or daily commutes for added safety.'
        },
        {
            icon: '🔔',
            title: 'Real-Time Alerts',
            description: 'Receive instant notifications and alerts, and keep your network informed of your safety status at all times.'
        }
    ];

    return (
        <section id="features" className="features animate-stagger">
            <div className="features-container">
                <h2 className="section-title">
                    Why Choose <span className="highlight">Aura Safe</span>?
                </h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card" style={{ '--i': index }}>
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
