import React from 'react';

const Download = () =>
{
    return (
        <section id="download" className="download">
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
                            <button className="download-btn ios">
                                <div className="download-icon">🍎</div>
                                <div className="download-info">
                                    <h4>Download on</h4>
                                    <p>App Store</p>
                                </div>
                            </button>
                            <button className="download-btn android">
                                <div className="download-icon">🤖</div>
                                <div className="download-info">
                                    <h4>Get it on</h4>
                                    <p>Google Play</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="download-image">
                        <img src="./app_icon.png" alt="Download Aura Safe" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;
