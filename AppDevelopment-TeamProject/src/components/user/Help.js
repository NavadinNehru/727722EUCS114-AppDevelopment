import React, { useState } from 'react';
import './Help.css';

const UserHelpSupport = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        // Logic to handle contact form submission
        alert('Your message has been sent!');
        setContact({ name: '', email: '', message: '' });
    };

    return (
        <div className="help-support-section">
            <h1>Help & Support</h1>
            <div className="help-support-container">
                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-item">
                        <h3>How can I track my orders?</h3>
                        <p>You can track your orders from the "My Orders" section in your dashboard.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How do I change my password?</h3>
                        <p>You can change your password from the "Settings" section in your dashboard.</p>
                    </div>
                    <div className="faq-item">
                        <h3>How do I contact support?</h3>
                        <p>You can contact support using the contact form below or by emailing support@example.com.</p>
                    </div>
                </div>
                <div className="contact-form-section">
                    <h2>Contact Support</h2>
                    <form onSubmit={handleContactSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={contact.name}
                                onChange={handleContactChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={contact.email}
                                onChange={handleContactChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={contact.message}
                                onChange={handleContactChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserHelpSupport;
