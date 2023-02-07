import CalHeader from "../../components/calcomponent/calheader";
import EquationBody from "../../components/calcomponent/equation/equationBody";
import EquationHeader from "../../components/calcomponent/equation/equationHeader";
import { device_id2 } from "../../assets/Device/sihwaseoul";
import { TotalPostButton } from "../../components/calcomponent/style";
import { useTotalvalueContext } from "../../context/totalvalueContext/useTotalvalueContext";
import { useEffect } from "react";
const CalSeoulSihwa = ()=>{
    const {entireValue, setEntireValue} = useTotalvalueContext();
    useEffect(()=>setEntireValue({}),[]);
    return(
    <div style={{display: 'flex', flexDirection:'column', width: "100%", height:"100%",alignItems:'center'}}>
        <CalHeader title={"서울 시화 도금 "}/>
        <EquationHeader/>
        {device_id2.map((key)=>
             <EquationBody devicename={key.company}/>
        )}
        <TotalPostButton onClick={()=>console.log(entireValue)}>Submit</TotalPostButton>
    </div>)
}
export default CalSeoulSihwa;