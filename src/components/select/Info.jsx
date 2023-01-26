import React,{useState} from "react";
import "./Info.css";
import { device_id0 } from "../../assets/Device/ansan";
import { device_id1 } from "../../assets/Device/sihwa";
import { device_id2 } from "../../assets/Device/sihwaseoul";
const Info = (props)=>{
      
    const [device , setDevice] = useState("AS00001");
    return(
        <div className = "select">
    <form>
        <div className="titleFont">
            날짜
        </div>
        <input type="date" className = "input"/>
    </form>
    <form>
        <div className="titleFont">
            Device Id
        </div>
        <select className = "input" onChange={e=>setDevice(e.target.value)}>
        {device_id0.map((key, index)=>{
            return(
        <option key={index}>{key.company}</option>);})}
        </select>
        <select className = "input">
        {
             device_id0.map((key)=>
                (device === key.company)? (key.device).map((key, index)=><option key={index}>{key}</option>):null
                )
        }
        </select>
    </form>
    </div>);
}
export default Info;