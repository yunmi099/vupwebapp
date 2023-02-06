import React,{useState, useEffect} from "react";
import "./Info.css";
import { device_id0 } from "../../assets/Device/ansan";
import { device_id1 } from "../../assets/Device/sihwa";
import { device_id2 } from "../../assets/Device/sihwaseoul";
import DatePicker from "../Calendar/calendar";
import { useDeviceContext } from "../../context/deviceContext";
const Info = (props)=>{   
const [city,setCity] = useState([]);
  useEffect(()=>{
    if (props.device === 0){
        setCity(device_id0);
    } else if (props.device ===1){
        setCity(device_id1);
    }  else if (props.device ===2){
        setCity(device_id2);
    } 
}
    ,[]);
    const [device , setDevice] = useState("AS0001");
    const [subDevice, setSubDevice] = useState("E00001");
    const {setDeviceId} = useDeviceContext();
    useEffect(()=>{
   
        setDeviceId(device.concat('_', subDevice))
        console.log(device.concat('_', subDevice));        
    },[device, subDevice])
    return(
        <div className = "select">
    <div>
        <div className="titleFont">
            날짜
        </div>
        <div>
            <DatePicker/>
        </div>
    </div>
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
    </div>);
}
export default Info;