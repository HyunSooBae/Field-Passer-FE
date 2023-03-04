import React from 'react';
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
import { Line } from 'react-chartjs-2';

type Props = {
  title: string;
};

const Chart = ({ title }: Props) => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const labels = () => {
    const dates = [];
    const date = new Date();
    let month = date.getMonth() + 1;
    let day = date.getDate() - 2;
    for (let i = 0; i < 3; i += 1) {
      // day
      if (day < 1) {
        month -= 1;
        if (month === 4 || month === 6 || month === 9 || month === 11) {
          day = 30 + day;
        } else if (month === 2) {
          day = 28 + day;
        } else {
          day = 31 + day;
        }
      }
      // month
      if (month < 1) {
        month = 12;
      }
      dates.push(`${month}/${day + i}`);
    }
    return dates;
  };
  const data = {
    labels: labels(),
    datasets: [
      {
        label: title,
        borderColor: '#21A04D',
        borderWidth: 2,
        data: [3, 4, 5],
      },
    ],
  };
  return (
    <div className='w-1/3 h-60'>
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
