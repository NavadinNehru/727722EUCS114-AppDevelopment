// src/components/user/UserProfile.js
import React, { useContext } from 'react';
import { UserContext } from '../../context/Usercontext';
import './Userprofile.css';

const UserProfile = () => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-profile">
            <div className="profile-card">
                <div className="profile-header">
                    <img 
                        src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} 
                        alt="User Avatar" 
                        className="profile-avatar" 
                    />
                    <h2 className="profile-name">{user.name}</h2>
                    <p className="profile-email">{user.email}</p>
                </div>
                <div className="profile-details">
                    <div className="profile-info">
                        <strong>Company:</strong> <span>{user.company}</span>
                    </div>
                    <div className="profile-info">
                        <strong>Role:</strong> <span>{user.role || 'Client'}</span>
                    </div>
                    <div className="profile-actions">
                        <button className="profile-button">Edit Profile</button>
                        <button className="profile-button">Settings</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
