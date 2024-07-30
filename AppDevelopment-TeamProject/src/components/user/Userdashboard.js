import React, { useContext } from 'react';
import './Userdashboard.css';
import { FaBox, FaCalendarDay, FaChartLine, FaUserAlt } from 'react-icons/fa';
import Chart from 'react-apexcharts'; // Assuming you're using ApexCharts
import { UserContext } from '../../context/Usercontext';

const UserDashboard = () => {
    // Example data for charts
    const chartOptions = {
        chart: {
            id: 'user-activity-chart',
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
        },
        grid: {
            show: false
        },
        colors: ['#3C55F6']
    };
    const chartSeries = [
        {
            name: 'Orders',
            data: [30, 40, 35, 50, 49, 60, 70]
        }
    ];
    const {user}=useContext(UserContext)

    return (
        <div className="user-dashboard">
            <h1 className="dashboard-title">Welcome, {user.name}!</h1>
            <div className="dashboard-cards">
                <div className="card">
                    <div className="card-icon-wrapper">
                        <FaBox className="card-icon" />
                    </div>
                    <div className="card-content">
                        <h3>Total Orders</h3>
                        <p>45</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon-wrapper">
                        <FaCalendarDay className="card-icon" />
                    </div>
                    <div className="card-content">
                        <h3>Upcoming Deliveries</h3>
                        <p>5</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-icon-wrapper">
                        <FaUserAlt className="card-icon" />
                    </div>
                    <div className="card-content">
                        <h3>Profile Completion</h3>
                        <p>80%</p>
                    </div>
                </div>
            </div>
            <div className="activity-trends">
                <h2>Activity Trends</h2>
                <Chart options={chartOptions} series={chartSeries} type="line" width="100%" height="400px" />
            </div>
        </div>
    );
};

export default UserDashboard;
