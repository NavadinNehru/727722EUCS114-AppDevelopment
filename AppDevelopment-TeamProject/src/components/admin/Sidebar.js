import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Adjust the path as needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faBox, faUsers, faCogs, faFileAlt, faBell, faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ onSelect }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>Admin Portal</h2>
            </div>
            <ul className="sidebar-menu">
                <li className={currentPath === '/admin' ? 'active' : ''} onClick={() => onSelect('dashboard')}>
                    <Link to="/admin">
                        <FontAwesomeIcon icon={faTachometerAlt} className='icons-sidebar' /> Dashboard
                    </Link>
                </li>
                <li className={currentPath === '/admin/orders' ? 'active' : ''} onClick={() => onSelect('orders')}>
                    <Link to="/admin/orders">
                        <FontAwesomeIcon icon={faBox} className='icons-sidebar'/> Orders
                    </Link>
                </li>
                <li className={currentPath === '/admin/users' ? 'active' : ''} onClick={() => onSelect('users')}>
                    <Link to="/admin/users">
                        <FontAwesomeIcon icon={faUsers} className='icons-sidebar'/> Users
                    </Link>
                </li>
                <li className={currentPath === '/admin/settings' ? 'active' : ''} onClick={() => onSelect('settings')}>
                    <Link to="/admin/settings">
                        <FontAwesomeIcon icon={faCogs} className='icons-sidebar'/> Settings
                    </Link>
                </li>
                <li className={currentPath === '/admin/reports' ? 'active' : ''} onClick={() => onSelect('reports')}>
                    <Link to="/admin/reports">
                        <FontAwesomeIcon icon={faFileAlt} className='icons-sidebar'/> Reports
                    </Link>
                </li>
                <li className={currentPath === '/admin/notifications' ? 'active' : ''} onClick={() => onSelect('notifications')}>
                    <Link to="/admin/notifications">
                        <FontAwesomeIcon icon={faBell} className='icons-sidebar'/> Notifications
                    </Link>
                </li>
                <li className={currentPath === '/admin/feedback' ? 'active' : ''} onClick={() => onSelect('feedback')}>
                    <Link to="/admin/feedback">
                        <FontAwesomeIcon icon={faComments} className='icons-sidebar'/> Feedback
                    </Link>
                </li>
                <li onClick={() => onSelect('logout')}>
                    <a href="/login">
                        <FontAwesomeIcon icon={faSignOutAlt} className='icons-sidebar'/> Logout
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
