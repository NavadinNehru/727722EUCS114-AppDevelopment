import React, { useState } from 'react';
import './Usersettings.css';

const UserSettings = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890'
    });

    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPassword({ ...password, [name]: value });
    };

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        // Logic to update profile
        alert('Profile updated successfully!');
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        // Logic to update password
        alert('Password changed successfully!');
    };

    return (
        <div className="settings-section">
            <h1>User Settings</h1>
            <div className="settings-container">
                <div className="settings-form">
                    <h2>Profile Information</h2>
                    <form onSubmit={handleProfileSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={profile.name}
                                onChange={handleProfileChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={profile.email}
                                onChange={handleProfileChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={profile.phone}
                                onChange={handleProfileChange}
                            />
                        </div>
                        <button type="submit" className="submit-btn">Update Profile</button>
                    </form>
                </div>
                <div className="settings-form">
                    <h2>Change Password</h2>
                    <form onSubmit={handlePasswordSubmit}>
                        <div className="form-group">
                            <label htmlFor="currentPassword">Current Password</label>
                            <input
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                                value={password.currentPassword}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="newPassword">New Password</label>
                            <input
                                type="password"
                                id="newPassword"
                                name="newPassword"
                                value={password.newPassword}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm New Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={password.confirmPassword}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Change Password</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserSettings;
