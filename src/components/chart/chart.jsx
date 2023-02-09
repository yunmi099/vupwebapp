import styled from 'styled-components';
import React,{useEffect, useState} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { options_1, options_2 } from './option';
import axios from "axios";
import { useDateContext } from '../../context/dateContext';
import { useDeviceContext } from '../../context/deviceContext';
import Dataset1 from '../../js/dataset1';
import Dataset2 from '../../js/dataset2';
const Graph = () => {
  const [size, setSize] = useState(false);
  const [dataset1, setDataset1] = useState({});
  const [dataset2, setDataset2] = useState({});
  const {startDate, endDate} = useDateContext();
  const {deviceId} = useDeviceContext();
  async function getData() {
    
    try {
      const response = await axios.get(
        `http://192.168.3.125:8080/api/vup?start_dt=${startDate}&end_dt=${endDate}&device_id=${deviceId}`
      );
      console.log(deviceId)
        setDataset1(Dataset1(response.data));
        setDataset2(Dataset2(response.data));
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    getData()
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

    useEffect(()=>{getData()},[startDate, endDate, deviceId])


  return (
    <> 
        <Container Mode = {size}>{
         Object.keys(dataset1).length !== 0?  <Line type="line" data={dataset1} options={options_1}/> : null
        }
        </Container>
        <Container Mode={size}>
        {
        Object.keys(dataset2).length !== 0 ?   <Line type="line" data={dataset2} options={options_2}/>: null
        }
      
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
