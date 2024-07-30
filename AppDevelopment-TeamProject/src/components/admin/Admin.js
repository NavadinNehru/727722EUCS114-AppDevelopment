// src/components/admin/AdminPortal.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Admindashboard'
import Orders from './Orders';
import './Admin.css'; // Adjust the path as needed
import UserSection from './User';
import SettingsSection from './Settings';
import ReportsSection from './Reports';
import NotificationSection from './Notifications';
import FeedbackSection from './Feedback';

const AdminPortal = () => {
    const [selectedSection, setSelectedSection] = useState('dashboard');

    const renderContent = () => {
        switch (selectedSection) {
            case 'dashboard':
                return <Dashboard />;
            case 'orders':
                return <Orders />;
            case 'users':
                return <UserSection />;
            case 'settings':
                return <SettingsSection />;
            case 'reports':
                return <ReportsSection />;
            case 'notifications':
                return <NotificationSection />;
            case 'feedback':
                return <FeedbackSection />;
            // Add cases for other sections as needed
            default:
                return <Dashboard />;
        }
    };

    return (
        <div className="admin-portal">
            <Sidebar onSelect={setSelectedSection} />
            <div className="admin-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminPortal;
