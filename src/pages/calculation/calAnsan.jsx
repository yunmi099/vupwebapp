import CalHeader from "../../components/calcomponent/calheader";
import EquationBody from "../../components/calcomponent/equation/equationBody";
import EquationHeader from "../../components/calcomponent/equation/equationHeader";
import { device_id0 } from "../../assets/Device/ansan";
import { TotalPostButton } from "../../components/calcomponent/style";
import { useTotalvalueContext } from "../../context/totalvalueContext/useTotalvalueContext";
import { useEffect } from "react";
import { useRefContext } from "../../context/refContext";
const CalAnsan = ()=>{
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
        <CalHeader title={"안산 도금"}/>
        <EquationHeader/>
        {device_id0.map((key, index)=>
             <EquationBody devicename={key.company} key={index}/>
        )}
        <TotalPostButton onClick={()=>totalSubmitEvent()}>Submit</TotalPostButton>
    </div>)
}
export default CalAnsan;