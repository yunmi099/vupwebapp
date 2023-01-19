import styled from 'styled-components';
import React,{useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { isRouteErrorResponse } from 'react-router-dom';
const options = {
  // 옵션 (1)
  responsive: true,
  // 옵션 (2)
  // interaction: {
  //   mode: "index" as const,
  //   intersect: false,
  // },
  // 옵션 (3)
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "#E3E3E3",
      },
    },
  },
};
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 2,
      data: [1, 2, 3, 4, 5],
    },
    {
      type: 'line',
      label: 'Dataset 2',
      backgroundColor: 'rgb(255, 99, 132)',
      data: [3, 4, 5, 6, 7, 8],
      borderColor: 'red',
      borderWidth: 2,
    },
    {
      type: 'line',
      label: 'Dataset 3',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [10, 11, 12, 13, 14, 15],
    },
  ],
};

const Graph = () => {
  const [size, setSize] = useState(false);

  useEffect(()=>{
    if (window.innerWidth <= window.innerHeight) {
      setSize(true);
    } else {
      setSize(false);

    }
  },[])

  window.addEventListener('resize', function () {
    if (window.matchMedia('(orientation: portrait)').matches) {
      setSize(true);
    } else {
      setSize(false);
   
    }
  })
  return (
    <Container Mode = {size}>
      <Line type="line" data={data} options={options}/>
    </Container>
  );
};

export default Graph;

const Container = styled.div`
  display:flex;
  background-color:white;
  padding:20px;
  align-items: center;
  justify-content: center;
  width : ${props=>props.Mode ? "80vw" : "40vw"}
`;