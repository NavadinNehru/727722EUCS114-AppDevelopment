import React from 'react';
import './User.css';

const UserSection = () => {
    const users = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Client' },
        { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com', role: 'Provider' },
        { id: 4, name: 'Emily Johnson', email: 'emily.johnson@example.com', role: 'Client' },
        { id: 5, name: 'Chris Lee', email: 'chris.lee@example.com', role: 'Provider' },
        { id: 6, name: 'Sarah Davis', email: 'sarah.davis@example.com', role: 'Admin' },
        { id: 7, name: 'David Wilson', email: 'david.wilson@example.com', role: 'Client' },
        { id: 8, name: 'Laura Martinez', email: 'laura.martinez@example.com', role: 'Provider' },
        { id: 9, name: 'James Anderson', email: 'james.anderson@example.com', role: 'Client' },
        { id: 10, name: 'Linda Taylor', email: 'linda.taylor@example.com', role: 'Admin' }
    ];

    return (
        <div className="user-section">
            <h1>Users</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserSection;
