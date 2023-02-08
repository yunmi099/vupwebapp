import CalHeader from "../../components/calcomponent/calheader";
import EquationBody from "../../components/calcomponent/equation/equationBody";
import EquationHeader from "../../components/calcomponent/equation/equationHeader";
import { device_id1 } from "../../assets/Device/sihwa";
import { TotalPostButton } from "../../components/calcomponent/style";
import { useTotalvalueContext } from "../../context/totalvalueContext/useTotalvalueContext";
import { useEffect } from "react";
import { useRefContext } from "../../context/refContext";
const CalSeoulSihwa = ()=>{
    const {entireValue, setEntireValue} = useTotalvalueContext();
    const {inputRef, setInputRef} = useRefContext();
    useEffect(()=>setEntireValue({}),[]);
    const totalSubmitEvent = ()=>{
        inputRef.map((key)=>{
         key.current.value = null;    
        })
        setInputRef([]);
        setEntireValue({});
    }
    return(
    <div style={{display: 'flex', flexDirection:'column', width: "100%", height:"100%",alignItems:'center'}}>
        <CalHeader title={"시화 도금 "}/>
        <EquationHeader/>
        {device_id1.map((key, index)=>
             <EquationBody devicename={key.company} key={index}/>
        )}
        <TotalPostButton onClick={()=>totalSubmitEvent()}>Submit</TotalPostButton>
    </div>)
}
export default CalSeoulSihwa;