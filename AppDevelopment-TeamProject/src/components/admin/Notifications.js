import React from 'react';
import './Notifications.css';

const NotificationSection = () => {
    const notifications = [
        { id: 1, message: 'System maintenance scheduled for tomorrow.', date: '2024-07-28' },
        { id: 2, message: 'New feature update released.', date: '2024-07-27' },
        { id: 3, message: 'Monthly performance review completed.', date: '2024-07-26' },
        { id: 4, message: 'Server outage resolved.', date: '2024-07-25' },
        { id: 5, message: 'New user registrations increased by 30%.', date: '2024-07-24' },
    ];

    return (
        <div className="notification-section">
            <h1>Notifications</h1>
            <div className="notification-list">
                {notifications.map(notification => (
                    <div key={notification.id} className="notification-item">
                        <p className="notification-message">{notification.message}</p>
                        <p className="notification-date">{notification.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NotificationSection;
