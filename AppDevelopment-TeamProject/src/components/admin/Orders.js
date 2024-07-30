// src/components/admin/Orders.js
import React from 'react';
import Chart from 'react-apexcharts';
import './Orders.css';

const Orders = () => {
    const chartOptions = {
        chart: {
            type: 'line',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        colors: ['#3C55F6'],
        title: {
            text: 'Orders Trend Over Time',
            align: 'center',
            style: {
                fontSize: '16px',
                color: '#000000',
            },
        },
    };

    const chartSeries = [
        {
            name: 'Orders',
            data: [30, 40, 35, 50, 49, 60, 70],
        },
    ];

    return (
        <div className="wrapper-orders">
                   <div className="orders">
            <h1>Orders Analytics</h1>
            <div className="chart-container">
                <Chart options={chartOptions} series={chartSeries} type="line" height={400} />
            </div>
        </div>
        </div>

    );
};

export default Orders;
