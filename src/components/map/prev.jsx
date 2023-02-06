import GoogleMap from "../../components/map/map";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Prev= ()=>{
    const navigate = useNavigate();
    return(
        <>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <img src={require('../../assets/images/Logo/logo2.png')} width="20%" style={{margin:"0px 20px"}} onClick={()=>{navigate('/')}}/>
      <div style={{fontSize:"1em",fontWeight:'700', margin:"0px 50px" , color:'blue'}}>안산 도금</div>
    </div>
    <div style={{display: "flex", alignItems: "center", justifyContent:"center", witdh: "100%", height:"100%", flexDirection:"column"}}>
        <GoogleMap/>
        <StyledLi
        onClick={() => {
          navigate("/ansan");
        }}
      >
        날짜별 차트 확인 
      </StyledLi>
    </div>
    </>)
}
const StyledLi = styled.div`
border:solid 1px;
border-color: #1e88e5;
border-radius: 17px;
background-color:white;
color: #1e88e5;
padding: 10px 0px;
margin-top: 20px;
width: 200px;
font-size: 0.8em;
font-weight: 800;
`
export default Prev;

