import Graph from "../components/chart";
import styled from "styled-components";
const Ansan = ()=>{
    return(
    <GraphWrap className="graphwrap">
    <Graph/>
    <Graph/></GraphWrap>)
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