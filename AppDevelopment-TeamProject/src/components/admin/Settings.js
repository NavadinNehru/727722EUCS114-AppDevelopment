import React, { useState } from 'react';
import { FaSave, FaBell, FaClock, FaLock } from 'react-icons/fa';
import './Settings.css';

const SettingsSection = () => {
    const [settings, setSettings] = useState({
        notificationEmail: 'admin@example.com',
        autoLogoutTime: 30,
        enableTwoFactorAuth: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings({
            ...settings,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the settings
        console.log('Settings saved:', settings);
    };

    return (
        <div className="settings-section">
            <h1>Settings</h1>
            <form className="settings-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="notificationEmail">
                        <FaBell className="icon" /> Notification Email
                    </label>
                    <input
                        type="email"
                        id="notificationEmail"
                        name="notificationEmail"
                        value={settings.notificationEmail}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="autoLogoutTime">
                        <FaClock className="icon" /> Auto Logout Time (minutes)
                    </label>
                    <input
                        type="number"
                        id="autoLogoutTime"
                        name="autoLogoutTime"
                        value={settings.autoLogoutTime}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="enableTwoFactorAuth">
                        <FaLock className="icon" /> Enable Two-Factor Authentication
                    </label>
                    <input
                        type="checkbox"
                        id="enableTwoFactorAuth"
                        name="enableTwoFactorAuth"
                        checked={settings.enableTwoFactorAuth}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="save-btn">
                    <FaSave className="icon" /> Save Settings
                </button>
            </form>
        </div>
    );
};

export default SettingsSection;
