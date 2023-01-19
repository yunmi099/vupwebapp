import Graph from "../components/chart/chart";
import styled from "styled-components";
import axios from "axios";
import Info from "../components/select/Info";
import React,{useEffect} from "react";
import "./page.css"
const Ansan = ()=>{

  async function getData() {
    try {
      const response = await axios.get(
        "http://192.168.3.125:8080/api/vup?date=2023-01-19&device_id=AS00010_E00002"
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

useEffect(() => {
    getData();
}, []);

    return(
    <div className = "mainInner">
        <Info/>
        <GraphWrap>
        <Graph/>
    <   Graph/></GraphWrap>
    </div>)
}
const GraphWrap = styled.div`
    display: flex;
    flex-wrap:wrap;
    align-items: space-evenly;
    justify-content: space-evenly;
    max-width: 100vw;
    height:90%;
`
export default Ansan;