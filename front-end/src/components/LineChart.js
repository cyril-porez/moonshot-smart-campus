import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import nécessaire pour chart.js 3.x

const LineChart = ({ labels, data, label }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: label,
                data: data,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default LineChart;
