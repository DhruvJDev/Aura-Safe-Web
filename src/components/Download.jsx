import React from 'react';
import appIcon from '../assets/app_icon.png';
import appleLogo from '../assets/apple_logo.png';
import androidLogo from '../assets/android_logo.png';

const Download = () =>
{
    const openStoreLink = (url) =>
    {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section id="download" className="download animate-slide">
            <div className="download-container">
                <div className="download-content">
                    <div className="download-text">
                        <h2>
                            Download <span className="highlight">Aura Safe</span> Today
                        </h2>
                        <p>
                            Get instant access to emergency assistance and safety features on your iOS or Android device. Download now and stay protected with trusted contacts always by your side.
                        </p>
                        <div className="download-buttons">
                            <button
                                type="button"
                                className="download-btn ios"
                                onClick={() => openStoreLink('https://www.apple.com/app-store/')}
                            >
                                <div className="platform-logo">
                                    <img src={appleLogo} alt="Apple logo" />
                                </div>
                                <div className="download-info">
                                    <h4>Download</h4>
                                    <p>for the IOS Devices</p>
                                </div>
                            </button>
                            <button
                                type="button"
                                className="download-btn android"
                                onClick={() => openStoreLink('https://play.google.com/store/games')}
                            >
                                <div className="platform-logo">
                                    <img src={androidLogo} alt="Android logo" />
                                </div>
                                <div className="download-info">
                                    <h4>Download</h4>
                                    <p>for the Android Devices</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="download-image">
                        <img src={appIcon} alt="Download Aura Safe" className="circular-logo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;
