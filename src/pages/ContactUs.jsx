import React, { useState } from 'react';

const ContactUs = () =>
{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // TODO: Add actual form submission logic
        console.log('Form submitted:', formData);
        alert('Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="page-container">
            <section className="page-content page-static">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you. Please reach out with any questions, feedback, or support requests.</p>

                <div className="contact-section">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <div className="contact-item">
                            <h3>📧 Email</h3>
                            <p><a href="mailto:support@aurasafe.com">support@aurasafe.com</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>🏢 Address</h3>
                            <p>Aura Safe Headquarters<br />Women Safety Building<br />Tech City, TC 12345</p>
                        </div>
                        <div className="contact-item">
                            <h3>📱 Phone</h3>
                            <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                        </div>
                        <div className="contact-item">
                            <h3>⏰ Business Hours</h3>
                            <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM<br />Sunday: Closed</p>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Send us a Message</h2>
                        <div className="form-group">
                            <label htmlFor="name">Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message *</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="6"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
