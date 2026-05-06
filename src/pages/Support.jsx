import React, { useState } from 'react';

const Support = () =>
{
    const [expandedFaq, setExpandedFaq] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'How do I activate the SOS button?',
            answer: 'The SOS button is prominently displayed on your home screen. Simply tap it to send emergency alerts to all your trusted contacts with your real-time location. The alert will include your current location and will update as long as you are available.'
        },
        {
            id: 2,
            question: 'Can I customize my trusted contacts?',
            answer: 'Yes! You can add, remove, or modify your trusted contacts at any time from the Settings menu. You can add family members, friends, local authorities, or any trusted person. They will receive notifications when you activate any safety features.'
        },
        {
            id: 3,
            question: 'Is my location data secure?',
            answer: 'Absolutely. Your location data is encrypted end-to-end and only shared with your explicitly designated trusted contacts during emergencies. We use military-grade encryption to protect all your personal information.'
        },
        {
            id: 4,
            question: 'How often does the app update location?',
            answer: 'When an emergency is active, the app updates your location in real-time to provide your contacts with the most accurate information. You can disable location sharing at any time by canceling the emergency.'
        },
        {
            id: 5,
            question: 'What should I do if I activate SOS by mistake?',
            answer: 'If you accidentally activate SOS, you have 30 seconds to cancel the alert before it is sent to your contacts. Look for the cancel button on your screen. You can also contact your trusted contacts directly to inform them it was a false alarm.'
        },
        {
            id: 6,
            question: 'Does the app work internationally?',
            answer: 'Yes, Aura Safe works globally. As long as you have an internet connection, you can send SOS alerts and share your location with contacts anywhere in the world.'
        },
        {
            id: 7,
            question: 'How do I contact support?',
            answer: 'You can reach our support team through the Contact Us page, via email at support@aurasafe.com, or through the in-app support chat. Our team typically responds within 24 hours.'
        },
        {
            id: 8,
            question: 'Is there a free trial?',
            answer: 'Yes! We offer a free trial of all premium features for 30 days. After that, you can choose from our various subscription plans based on your needs.'
        }
    ];

    const toggleFaq = (id) =>
    {
        setExpandedFaq(expandedFaq === id ? null : id);
    };

    return (
        <div className="page-container">
            <section className="page-content page-static">
                <h1>Support & Help Center</h1>
                <p>Find answers to common questions and get the help you need.</p>

                <div className="support-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        {faqs.map(faq => (
                            <div key={faq.id} className="faq-item">
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(faq.id)}
                                >
                                    <span>{faq.question}</span>
                                    <span className={`faq-toggle ${expandedFaq === faq.id ? 'open' : ''}`}>+</span>
                                </button>
                                {expandedFaq === faq.id && (
                                    <div className="faq-answer">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="support-section">
                    <h2>Getting Started</h2>
                    <div className="getting-started">
                        <div className="step">
                            <h3>Step 1: Download & Install</h3>
                            <p>Download Aura Safe from the App Store or Google Play and complete the installation.</p>
                        </div>
                        <div className="step">
                            <h3>Step 2: Create Account</h3>
                            <p>Sign up with your email and phone number. Verify your account through the verification link.</p>
                        </div>
                        <div className="step">
                            <h3>Step 3: Add Trusted Contacts</h3>
                            <p>Add family, friends, or anyone you trust. They will receive notifications when you send SOS alerts.</p>
                        </div>
                        <div className="step">
                            <h3>Step 4: Enable Permissions</h3>
                            <p>Grant location and notification permissions for the app to function properly during emergencies.</p>
                        </div>
                        <div className="step">
                            <h3>Step 5: You're Ready!</h3>
                            <p>Your Aura Safe is now set up and ready to protect you. Stay safe!</p>
                        </div>
                    </div>
                </div>

                <div className="support-section">
                    <h2>Still Need Help?</h2>
                    <p>If you couldn't find what you're looking for, our support team is here to help.</p>
                    <div className="support-options">
                        <div className="support-option">
                            <h3>📧 Email Support</h3>
                            <p><a href="mailto:support@aurasafe.com">support@aurasafe.com</a></p>
                        </div>
                        <div className="support-option">
                            <h3>💬 Live Chat</h3>
                            <p>Available Monday-Friday, 9 AM - 6 PM</p>
                        </div>
                        <div className="support-option">
                            <h3>📱 In-App Help</h3>
                            <p>Access help directly from the app menu</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Support;
