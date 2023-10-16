import { Bar } from "react-chartjs-2";


const TinyBarChart = () => {
    const acquisitionData =  [400, 300, 600, 140, 133, 117] 

    const data = {
        labels: ["", "", "", "", "", ""],
        datasets: [
          {
            label: 'All Time Sale',
            data: acquisitionData, 
            backgroundColor: ["gray", "gray", "gray", "gray", "gray", "gray"],
            borderColor: "transparent",
            borderRadius: 5
          },
        ],
      };


    
    return(
        <Bar data={data} 
        options={{
         plugins: {
           legend: {
             display: false,
           },
           filler: 'orange'
         },
         responsive: true,
         scales: {
           x: {
             grid: {
               display: false
             }
           },
           y: {
              beginAtZero: false,
              min: 100,
              max: 600,
              display: false,
             grid: {
               drawTicks: false,
               display: false
             },
              ticks: {
               stepSize: 100,
                callback: (value) => `$${value}`,
              }
             }
         },
          aspectRatio: 1
       }}
       />
    )
}

export default TinyBarChart