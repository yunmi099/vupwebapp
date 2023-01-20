import styled from 'styled-components';
import React,{useEffect, useState} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { dataset1, dataset2 } from './Dataset';
import { options_1, options_2 } from './option';

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
    <> 
        <Container Mode = {size}>
        <Line type="line" data={dataset1} options={options_1}/>
        </Container>
        <Container Mode={size}>
        <Line type="line" data={dataset2} options={options_2}/>
      </Container>
      </>
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