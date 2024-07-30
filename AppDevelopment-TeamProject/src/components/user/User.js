import React, { useState } from 'react';
import UserSidebar from './Usersidebar';
import UserDashboard from './Userdashboard'; // Import other components for the user dashboard
// import UserProfile from './UserProfile';
import Userorders from './Userorders';
import UserNotifications from './Usernotifications';
import UserSettings from './Usersettings';
// import UserHelp from './UserHelp';
// import UserFeedback from './UserFeedback';
import './User.css'; // Adjust the path as needed
import UserHelpSupport from './Help';
import UserFeedback from './Userfeedback';
import UserProfile from './Userprofile';

const UserPortal = () => {
    const [selectedSection, setSelectedSection] = useState('dashboard');

    const renderContent = () => {
        switch (selectedSection) {
            case 'dashboard':
                return <UserDashboard />;
            case 'orders':
                return <Userorders />;
            case 'profile':
                return <UserProfile />;
            // case 'orders':
            //     return <UserOrders />;
            case 'notifications':
                return <UserNotifications />;
            // case 'settings':
            //     return <UserSettings />;
            // case 'help':
            //     return <UserHelpSupport />;
            case 'feedback':
                return <UserFeedback />;
            // Add cases for other sections as needed
            default:
                return <UserDashboard />;
        }
    };

    return (
        <div className="user-portal">
            <UserSidebar onSelect={setSelectedSection} />
            <div className="user-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default UserPortal;
