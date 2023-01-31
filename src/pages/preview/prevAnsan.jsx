import Graph from "../../components/chart/chart";
import "../page.css"
import GoogleMap from "../../components/map/map";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const PrevAnsan = ()=>{
    const navigate = useNavigate();
    return(
        <>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <img src={require('../../assets/images/Logo/logo2.png')} width="20%" style={{margin:"0px 20px"}}/>
    <div style={{fontSize:"1.6em",fontWeight:'700', margin:"0px 50px" , color:'blue'}}>안산 도금</div>
    </div>
        <GoogleMap/>
        <Graph/>      
        <StyledLi
        onClick={() => {
          navigate("prevansan");
        }}
      >
        안산 도금
      </StyledLi>

    </>)
}
const StyledLi = styled.div`
border:solid 1px;
border-color: #1e88e5;
border-radius: 17px;
background-color:white;
color: #1e88e5;
padding:10px 0px;
font-size: 0.8em;
font-weight: 800;
`
export default PrevAnsan;

