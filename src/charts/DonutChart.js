import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DonutChart = () => {
  const ac = [20, 30, 100, 300]
  const data = {
    labels: ['dadsa', 'adsas', 'asdsa', 'sadads'],
    datasets: [
      {
        label: 'Resources',
        data: ac,
        backgroundColor: ['#ED8936', 'pink', 'blue', 'darkblue'],
        borderColor: 'transparent',
      },
    ]
  }

  return (
    <Doughnut
      options={{
        plugins: {
          legend: {
            display: false
          }
        },
        // cutout: 100,
        spacing:3,  
        responsive: true,
        aspectRatio: 1.618 / 1 // This line makes the chart responsive
      }}
      data = {data}
    />
  )
}

export default DonutChart
