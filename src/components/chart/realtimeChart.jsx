import styled from 'styled-components';
import React,{useEffect, useState} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { options_1, options_2 } from './option';
import axios from "axios";
import Dataset1 from '../../js/dataset1';
import Dataset2 from '../../js/dataset2';
import { dateToString } from '../../js/dateToString';
const RealtimeChart = (props) => {
  const [size, setSize] = useState(false);
  const [dataset1, setDataset1] = useState({});
  const [dataset2, setDataset2] = useState({});
  async function getData() {
  
    try {
      const response = await axios.get(
        `http://192.168.3.125:8080/api/vup?start_dt=${dateToString(new Date())}&end_dt=${dateToString(new Date())}&device_id=${props.deviceId}`
      );
      console.log(response.data)
      if (response.data.length !==0 ){
        setDataset1(Dataset1(response.data));
        setDataset2(Dataset2(response.data));}
    } catch (e) {
      console.log(e);
    }
  }
  setInterval(() => {
    getData();
    props.setDate(new Date())
   }, 60000);

    useEffect(()=>{props.setDate(new Date());getData();console.log(props.deviceId)},[props.deviceId])
  return (
    <div> 
        <Container>{
         Object.keys(dataset1).length !== 0?  <Line type="line" data={dataset1} options={options_1}/> : null
        }
        {
        Object.keys(dataset2).length !== 0 ?   <Line type="line" data={dataset2} options={options_2}/>: null
        }
      
      </Container>
      </div>
  );
};

export default RealtimeChart;

const Container = styled.div`
  display:flex;
  width:50vw;
  align-items: center;
  justify-content: center;
`;
