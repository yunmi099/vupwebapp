import GoogleMap from "../../components/map/map";
// import { Map } from "./direction";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { device_id0 } from "../../assets/Device/ansan";
import { device_id1 } from "../../assets/Device/sihwa";
import { device_id2 } from "../../assets/Device/sihwaseoul";
import {StyledMenu, StyledLi, StyledRouting} from './style'
import RealtimeChart from "../chart/realtimeChart";
const Prev= (props)=>{
    const navigate = useNavigate();
    const [city,setCity] = useState([]);
    useEffect(()=>{
      if (props.device === 0){
          setCity(device_id0);
      } else if (props.device ===1){
          setCity(device_id1);
      }  else if (props.device ===2){
          setCity(device_id2);
      } 
  },[]);

      const [device , setDevice] = useState("AS00001");
      const [subDevice, setSubDevice] = useState("E00001");
      const [totalDeviceId, setTotalDeviceId] =useState("AS00001_E00001");
      useEffect(()=>{
        setTotalDeviceId(device.concat('_', subDevice))
        console.log(device.concat('_', subDevice));
    },[device, subDevice])
    return(
        <>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <div style={{display:'flex', alignItems:'center', margin:"10px"}}>
        <img src={require('../../assets/images/Logo/logo2.png')} width="20%" onClick={()=>{navigate('/')}}/>
       
      </div>
      <div style={{display:'flex'}}>
      <StyledMenu onClick={()=>window.open('http://iae.darwin3d.co.kr/')}>Routing Network</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevansan')}>안산 도금 산단</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevsihwa')}>시화 도금 산단</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevseoulsihwa')}>인천 표면 산단</StyledMenu>
        <div style={{fontSize:"0.8em",fontWeight:'700', margin:"30px 10px  0px 5px" , color:'blue'}}>{props.title}</div>
      </div>
    
    </div>
    <div style={{display: "flex", alignItems: "center", justifyContent:"center", witdh: "100%", height:"100%", flexDirection:"column"}}>
        <GoogleMap/>
        <form>
            <div className="titleFont">
                Device Id
            </div>
            <select className = "input" onChange={e=>{setDevice(e.target.value);setSubDevice("E00001")}}>
            {city.map((key, index)=>{
                  return(
            <option key={index}>{key.company}</option>);})}
            </select>
            <select className = "input" onChange={e=>setSubDevice(e.target.value)}>
              {
              city.map((key)=>
                 (device === key.company)? (key.device).map((key, index)=><option key={index} >{key}</option>):null
                   )
                }
           </select>
        </form>
        
        <RealtimeChart deviceId={totalDeviceId}/>
      
        <div style={{display:"flex"}}>
          <StyledLi
          onClick={() => {
            navigate(props.location1);
          }}
        >
          날짜별 차트 확인 
        </StyledLi>
        <StyledLi
          onClick={() => {
            navigate(props.location2);
          }}
        >
          source/sink 
        </StyledLi>
        </div>
    </div>
    </>)
}
export default Prev;

