import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['2/28', '3/1', '3/2'],
  datasets: [
    {
      label: 'Dataset',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      data: [1, 2, 3, 4, 5, 6],
    },
  ],
};

const Chart = () => {
  return <div className='w-1/3 bg-field h-60'></div>;
};

export default Chart;
