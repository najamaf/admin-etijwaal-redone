import React from 'react'
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);


const AreaChart = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

     const data = {
        labels: ["year1", "year2", "year3"],
        datasets: [
            {
                label: 'Acquisition by year',
                data: [1000, 2000, 3000],
                backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(75, 192, 192, 0.2)"],
                 borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }
        ]
     }
     const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
      responsive: true,
      aspectRatio: 16/ 9
    };

  return (
      <Line 
      data={data}
      options={options}
      />
  )
}

export default AreaChart