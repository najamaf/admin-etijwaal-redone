import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import '../css/styles.css'
import { Box,Button, ButtonGroup, Heading } from "@chakra-ui/react";



const BarChart = () => {
  const [selected, setSelected] = useState("All Time");
  const acquisitionData =  selected === 'All Time' ? [400, 300, 600, 140, 133, 117, 250] : selected === 'This Year' ? [400, 600, 355, 475, 260, 566, 300] : selected === 'This Week' ? [400, 300, 540, 240, 300, 143, 400] : ''
  
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: 'All Time Sale',
        data: acquisitionData, 
        backgroundColor: ["gray", "#ED8936", "gray", "#ED8936", "gray", "#ED8936", "gray"],
        borderColor: "transparent",
        borderRadius: 5,
        
      },
    ],
  };

  return (
    <Box bg={'#fff'} flex="3" my={{  base:4, md: 4, lg: 10}} maxWidth="100%" shadow={'xl'} borderRadius={10} p={5}>   
        <Box pb={4} mb={2} borderBottom='1px solid lightgray'>
         <Heading fontSize='22px'>Lead sales</Heading>
        </Box>    
        <Box>
          <ButtonGroup mb={8} mt={2}>
            <Button onClick={() => setSelected("All Time")} color="darkgray" fontWeight="bold" size="sm" className={selected === "All Time" ? "chart-active" : ""} bg="transparent">All time</Button>
            <Button className={selected === "This Year" ? "chart-active" : ""} color="darkgray" fontWeight="bold" onClick={() => setSelected("This Year")} size="sm" bg="transparent">This Year</Button>
            <Button color="darkgray" fontWeight="bold" size="sm" bg="transparent" className={selected === "This Week" ? "chart-active" : ""} onClick={() => setSelected("This Week")}>This Week</Button>
          </ButtonGroup>
        </Box>
      <Bar data={data} 
       options={{
        plugins: {
          legend: {
            display: false,
          }
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
            grid: {
              drawTicks: false,
              
            },
             ticks: {
              stepSize: 100,
               callback: (value) => `$${value}`,
             }
            }
        },
         aspectRatio: 4.5
      }}
      />
    </Box>
  );
};

export default BarChart;
