import React from 'react';
import homePage from '../assets/home_page.png';
import settingPage from '../assets/setting_page.png';
import contactPage from '../assets/contact_page.png';

const previews = [
    {
        image: homePage,
        title: 'Home Screen',
        description: 'A clean dashboard with quick access to safety tools and emergency action.'
    },
    {
        image: settingPage,
        title: 'Settings View',
        description: 'Simple setup screens for trusted contacts, alerts, and app preferences.'
    },
    {
        image: contactPage,
        title: 'Contact Screen',
        description: 'Easy contact management so users can stay connected and prepared.'
    }
];

const AppPreview = () =>
{
    return (
        <section id="preview" className="app-preview animate-stagger">
            <div className="app-preview-container">
                <h2 className="section-title">
                    See the App in <span className="highlight">Action</span>
                </h2>
                <p className="app-preview-subtitle">
                    These screens show what users experience when they open Aura Safe.
                </p>
                <div className="app-preview-grid">
                    {previews.map((item, index) => (
                        <article key={item.title} className="app-preview-card" style={{ '--i': index }}>
                            <div className="app-preview-image-wrap">
                                <img src={item.image} alt={item.title} className="app-preview-image" />
                            </div>
                            <div className="app-preview-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AppPreview;
