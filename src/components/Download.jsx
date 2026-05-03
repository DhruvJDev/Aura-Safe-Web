import React from 'react';

const Download = () =>
{
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
                            <button className="download-btn ios">
                                <div className="platform-logo">
                                    {/* Apple SVG */}
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.365 1.43c-.72.06-1.73.48-2.28 1.08-.5.54-.95 1.44-.78 2.29 1.04.04 2.12-.56 2.78-1.22.48-.48.9-1.26.28-2.15z" fill="#000" />
                                        <path d="M12.022 4.48c-.45.01-1.02.28-1.57.67-.6.44-1.13 1.07-1.53 1.76-.98 1.7-.27 4.27.7 5.76.5.78 1.07 1.57 1.86 1.61.72.04 1.03-.46 2.13-.46 1.08 0 1.4.46 2.12.45.85 0 1.48-1.05 1.96-1.83.34-.53.48-1.04.77-1.55.3-.52.84-1.69.84-3.08 0-1.7-.82-2.96-1.83-3.98-1.02-1.03-2.36-1.8-3.81-1.83-.87-.02-1.7.24-2.49.72-.53.31-1.03.73-1.39 1.27.01 0 .01 0 0 0 .84-.01 1.7-.18 2.45-.18z" fill="#000" />
                                    </svg>
                                </div>
                                <div className="download-info">
                                    <h4>Download on</h4>
                                    <p>App Store</p>
                                </div>
                            </button>
                            <button className="download-btn android">
                                <div className="platform-logo">
                                    {/* Android SVG */}
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.6 9.48c.03-.15.05-.3.05-.48 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .18.02.33.05.48H6.5c-.28 0-.5.22-.5.5v7.02c0 .28.22.5.5.5h10.98c.28 0 .5-.22.5-.5V9.98c0-.28-.22-.5-.5-.5h-0.38z" fill="#fff" />
                                        <path d="M7.5 4.5l-.7-1.2M16.5 4.5l.7-1.2" stroke="#4CAF50" strokeWidth="1.2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="download-info">
                                    <h4>Get it on</h4>
                                    <p>Google Play</p>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="download-image">
                        <img src="/app_icon.png" alt="Download Aura Safe" className="circular-logo" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;
