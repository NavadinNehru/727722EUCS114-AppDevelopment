import React from 'react';
import './Reports.css';

const ReportsSection = () => {
    const reports = [
        { id: 1, title: 'Monthly Sales Report', date: '2024-07-01', status: 'Completed' },
        { id: 2, title: 'Quarterly Revenue Report', date: '2024-06-15', status: 'In Progress' },
        { id: 3, title: 'Annual Performance Report', date: '2024-01-10', status: 'Completed' },
        { id: 4, title: 'Customer Feedback Report', date: '2024-05-20', status: 'Pending' },
        { id: 5, title: 'Inventory Report', date: '2024-07-25', status: 'Completed' },
    ];

    return (
        <div className="reports-section">
            <h1>Reports</h1>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.title}</td>
                            <td>{report.date}</td>
                            <td>{report.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsSection;
