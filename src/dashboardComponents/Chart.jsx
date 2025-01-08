import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OrderStatistics = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'Pending',
        data: [28, 30, 25, 35, 30, 32, 38, 27, 32, 36, 33, 40],
        borderColor: '#8B5CF6', // Purple color
        backgroundColor: '#8B5CF6',
        fill: false,
        tension: 0.4,
      },
      {
        label: 'New Orders',
        data: [20, 25, 22, 30, 27, 29, 34, 22, 28, 35, 32, 38],
        borderColor: '#22D3EE', // Blue color
        backgroundColor: '#22D3EE',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff',
        },
      },
      y: {
        ticks: {
          color: '#fff',
        },
      },
    },
  };

  return (
    <div className="p-5 bg-primary cursor-crosshair rounded-lg shadow-lg mb-5">
        <div className="flex justify-between text-white mb-2">
            <h2 className="font-semibold">Order Statistics</h2>
            <p className="text-blue-400">View All</p>
        </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default OrderStatistics;