import styled from 'styled-components';
import React,{useEffect, useState} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { options_1, options_2 } from './option';
import axios from "axios";
const Graph = () => {
  const [size, setSize] = useState(false);
  const [Data, setData] = useState([]);
  const [dataset1, setDataset1] = useState({});
  const [dataset2, setDataset2] = useState({});
  async function getData() {
    try {
      const response = await axios.get(
        `http://192.168.3.125:8080/api/vup?start_dt=2022-02-01&end_dt=2022-02-02&device_id=AS00010_E00002`
      );
      setData(response.data);

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
  useEffect(()=>{    
    if (Data.length !==0 ){
      setDataset1({
        labels: Data.map((key) => key.COLLECTED_DT.substring(11, 19)),
        datasets: [
          {
            type: "line",
            label: "CRNT",
            yAxisID: "y",
            borderColor: "grey",
            borderWidth: 2,
            data: Data.map((key) => key.CRNT),
          },
          {
            type: "line",
            label: "VOLT",
            yAxisID: "y_sub",
            backgroundColor: "rgb(255, 99, 132)",
            data: Data.map((key) => key.VOLT),
            borderColor: "red",
            borderWidth: 2,
          },
          {
            type: "line",
            label: "POWR",
            yAxisID: "y_sub2",
            backgroundColor: "rgb(75, 192, 192)",
            data: Data.map((key) => key.POWR),
          },
        ],
      });
   
      setDataset2({
        labels: Data.map((key) => key.COLLECTED_DT.substring(11, 19)),
        datasets: [
          {
            type: "line",
            label: "POWR_AMT",
            yAxisID: "y",
            borderColor: "grey",
            borderWidth: 2,
            data: Data.map((key) => key.POWR_AMT),
          },
        ],
      });
    }},[Data]);


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
