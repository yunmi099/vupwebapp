import Graph from "../../components/chart/chart";
import styled from "styled-components";
import Info from "../../components/select/Info";
import React,{useEffect} from "react";
import "../page.css"
const Ansan = ()=>{

    return(
    <div className = "mainInner">
        <Info device={0}/>
        <GraphWrap>
        <Graph/>
        <Graph/>
        </GraphWrap>
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