import React from 'react';
import './Admindashboard.css';
import ApexCharts from 'react-apexcharts'; // Import ApexCharts for the graph

const Dashboard = () => {
    // Sample data for the revenue chart
    const revenueOptions = {
        chart: {
            type: 'line',
            height: 350
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yaxis: {
            title: {
                text: 'Revenue'
            }
        },
        title: {
            text: 'Monthly Revenue Trends',
            align: 'left'
        }
    };

    const revenueSeries = [{
        name: 'Revenue',
        data: [3000, 4000, 3500, 5000, 4800, 5500, 6000, 7000, 6500, 7000, 7200, 8000]
    }];

    // Sample data for recent orders
    const recentOrders = [
        { id: '001', client: 'John Doe', date: '2024-07-01', status: 'Delivered' },
        { id: '002', client: 'Jane Smith', date: '2024-07-02', status: 'Pending' },
        { id: '003', client: 'Alice Johnson', date: '2024-07-03', status: 'Shipped' }
    ];

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="cardd-container">
                <div className="cardd">
                    <h3>Total Orders</h3>
                    <p>1500</p>
                </div>
                <div className="cardd">
                    <h3>Active Shipments</h3>
                    <p>320</p>
                </div>
                <div className="cardd">
                    <h3>Pending Deliveries</h3>
                    <p>85</p>
                </div>
                <div className="cardd">
                    <h3>New Clients</h3>
                    <p>45</p>
                </div>
            </div>
            <div className="dashboard-content">
                <div className="revenue-chart">
                    <ApexCharts
                        options={revenueOptions}
                        series={revenueSeries}
                        type="line"
                        height={350}
                    />
                </div>
                <div className="recent-orders">
                    <h2>Recent Orders</h2>
                    <ul>
                        {recentOrders.map(order => (
                            <li key={order.id}>
                                <strong>Order ID:</strong> {order.id} | 
                                <strong> Client:</strong> {order.client} | 
                                <strong> Date:</strong> {order.date} | 
                                <strong> Status:</strong> {order.status}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
