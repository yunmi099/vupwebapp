import GoogleMap from "../map/map";
// import { Map } from "./direction";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { device_id0 } from "../../assets/Device/ansan";
import { device_id1 } from "../../assets/Device/sihwa";
import { device_id2 } from "../../assets/Device/sihwaseoul";
import {StyledMenu, StyledLi, StyledRouting} from './style'
import RealtimeChart from "../chart/realtimeChart";
import { useDeviceContext } from "../../context/deviceContext";
import { datetimeToString } from "../../js/dateToString";
import PrevHeader from "./prevHeader";
const Prev= (props)=>{
    const navigate = useNavigate();
    const [city,setCity] = useState([]);
    const {setDeviceId} = useDeviceContext();
    const [date, setDate] = useState(new Date())
    console.log(props)
    useEffect(()=>{
      if (props.device === 0){
         setDeviceId("AS00001_E00001");
         setTotalDeviceId("AS00001_E00001")
         setCity(device_id0);
      } else if (props.device ===1){
         setDeviceId("SH00001_E00001");
         setTotalDeviceId("SH00001_E00001")
         setCity(device_id1);
      }  else if (props.device ===2){
         setDeviceId("SH00012_E00001");
         setTotalDeviceId("SH00012_E00001")
         setCity(device_id2);
      } 
  },[]);
      const [id, setId] = useState(null);
      const [device , setDevice] = useState();
      const [subDevice, setSubDevice] = useState();
      const [totalDeviceId, setTotalDeviceId] =useState("");
      useEffect(()=>{
        if (id != null){
          setTotalDeviceId(id.concat('_', subDevice))
        }
    },[id, subDevice])
    const onHandleDevice = (e)=> {
      city.map((key)=>{
          if (key.name === e.target.value){
              setId(key.company);
          }
      })
      setDevice(e.target.value);
      setSubDevice("E00001");
  }
    return(
        <>
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
      <PrevHeader title={props.title}/>

    
    </div>
    <div style={{display: "flex", alignItems: "center", justifyContent:"center", witdh: "100%", height:"100%", flexDirection:"column"}}>
        <GoogleMap location={props.device}/>
        <div style={{display:'flex', flexDirection:'column', margin:10}}>
                <div style={{fontSize:'0.85em'}}>✅ 이 차트는 1분에 한번씩 업데이트 됩니다. </div>     
                <div style={{marginTop:5,fontSize:'0.8em'}}>마지막 업데이트 : {datetimeToString(date)}</div>   
        </div> 
        <form>
            <div className="titleFont">
                Device Id
            </div>
            <select className = "input" onChange={e=>{onHandleDevice(e)}}>
            {city.map((key, index)=>{
                  return(
            <option key={index}>{key.name}</option>);})}
            </select>
            <select className = "input" onChange={e=>setSubDevice(e.target.value)}>
            {id === null ? city[0]?(city[0].device).map((key, index)=><option key={index}>{key}</option>):null :
             city.map((key)=>
                (device === key.name)? (key.device).map((key, index)=><option key={index} >{key}</option>):null
                )
        }
           </select>
        </form>
        <RealtimeChart deviceId={totalDeviceId} date={date} setDate={setDate}/>
      
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
       {props.device===0?<StyledLi
          onClick={() => {
            navigate('/ansannmlist');
          }}
        >
        Ansan name list    
        </StyledLi>:null}
        </div>
    </div>
    </>)
}
export default Prev;

