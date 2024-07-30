import React from 'react';
import './Userorders.css';

const OrdersSection = () => {
    // Sample data for orders with status history
    const orders = [
        {
            id: 1,
            date: '2024-07-01',
            status: 'Delivered',
            total: '$150.00',
            statusHistory: [
                { status: 'Shipped', date: '2024-06-28', location: 'New York' },
                { status: 'Out for Delivery', date: '2024-06-30', location: 'New Jersey' },
                { status: 'Delivered', date: '2024-07-01', location: 'New York' }
            ]
        },
        {
            id: 2,
            date: '2024-07-05',
            status: 'Pending',
            total: '$200.00',
            statusHistory: [
                { status: 'Pending', date: '2024-07-05', location: 'Warehouse' }
            ]
        },
        // Add more orders as needed
    ];

    return (
        <div className="orders-section">
            <h1>Order History</h1>
            <table className="orders-table">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>History</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.date}</td>
                            <td className={`status ${order.status.toLowerCase()}`}>{order.status}</td>
                            <td>{order.total}</td>
                            <td>
                                <div className="history">
                                    {order.statusHistory.map((entry, index) => (
                                        <div key={index} className="history-entry">
                                            <div className="history-status">{entry.status}</div>
                                            <div className="history-date">{entry.date}</div>
                                            <div className="history-location">{entry.location}</div>
                                        </div>
                                    ))}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersSection;
