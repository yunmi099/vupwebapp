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
    const [id, setId] = useState(null);
    const [device , setDevice] = useState();
    const [subDevice, setSubDevice] = useState();
    const {setDeviceId} = useDeviceContext();
    useEffect(()=>{
        if (id != null){
            setDeviceId(id.concat('_', subDevice))
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
        <select className = "input" onChange={e=>{onHandleDevice(e)}}>
        {city.map((key, index)=>{
            return(
        <option key={index}>{key.name}</option>);})}
        </select>
        <select className = "input" onChange={e=>setSubDevice(e.target.value)}>
        {id === null ? city[0] ?(city[0].device).map((key, index)=><option key={index}>{key}</option>):null :
             city.map((key)=>
                (device === key.name)? (key.device).map((key, index)=><option key={index} >{key}</option>):null
                )
        }
        </select>
    </form>
    </div>);
}
export default Info;