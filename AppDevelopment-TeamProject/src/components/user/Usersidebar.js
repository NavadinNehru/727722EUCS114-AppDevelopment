// src/components/user/UserSidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faBox, faBell, faCogs, faInfoCircle, faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Usersidebar.css';

const UserSidebar = ({ onSelect }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>User Dashboard</h2>
            </div>
            <ul className="sidebar-menu">
                <li className={currentPath === '/user' ? 'active' : ''} onClick={() => onSelect('dashboard')}>
                    <Link to="/user">
                        <FontAwesomeIcon icon={faTachometerAlt} className='user-sidebar-icon' /> Dashboard
                    </Link>
                </li>
                <li className={currentPath === '/user/profile' ? 'active' : ''} onClick={() => onSelect('profile')}>
                    <Link to="/user/profile">
                        <FontAwesomeIcon icon={faUser} className='user-sidebar-icon'/> Profile
                    </Link>
                </li>
                <li className={currentPath === '/user/orders' ? 'active' : ''} onClick={() => onSelect('orders')}>
                    <Link to="/user/orders">
                        <FontAwesomeIcon icon={faBox} className='user-sidebar-icon'/> My Orders
                    </Link>
                </li>
                <li className={currentPath === '/user/notifications' ? 'active' : ''} onClick={() => onSelect('notifications')}>
                    <Link to="/user/notifications">
                        <FontAwesomeIcon icon={faBell} className='user-sidebar-icon'/> Notifications
                    </Link>
                </li>
                {/* <li className={currentPath === '/user/settings' ? 'active' : ''} onClick={() => onSelect('settings')}>
                    <Link to="/user/settings">
                        <FontAwesomeIcon icon={faCogs} /> Settings
                    </Link>
                </li>
                <li className={currentPath === '/user/help' ? 'active' : ''} onClick={() => onSelect('help')}>
                    <Link to="/user/help">
                        <FontAwesomeIcon icon={faInfoCircle} /> Help & Support
                    </Link>
                </li> */}
                <li className={currentPath === '/user/feedback' ? 'active' : ''} onClick={() => onSelect('feedback')}>
                    <Link to="/user/feedback">
                        <FontAwesomeIcon icon={faComments} className='user-sidebar-icon'/> Feedback
                    </Link>
                </li>
                <li onClick={() => onSelect('logout')}>
                    <a href="/login">
                        <FontAwesomeIcon icon={faSignOutAlt} className='user-sidebar-icon'/> Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default UserSidebar;
