import CalHeader from "../../components/calcomponent/calheader";
import { useState } from "react";
import EquationBody from "../../components/calcomponent/equation/equationBody";
import EquationHeader from "../../components/calcomponent/equation/equationHeader";
import { device_id0 } from "../../assets/Device/ansan";
import { TotalPostButton } from "../../components/calcomponent/style";
import axios from "axios";
const CalAnsan = ()=>{
    return(
    <div style={{display: 'flex', flexDirection:'column', width: "100%", height:"100%",alignItems:'center'}}>
        <CalHeader title={"안산 도금 "}/>
        <EquationHeader/>
        {device_id0.map((key)=>
             <EquationBody devicename={key.company}/>
        )}
        <TotalPostButton>Submit</TotalPostButton>
    </div>)
}
export default CalAnsan;