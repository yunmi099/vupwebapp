import CalHeader from "../../components/calcomponent/calheader";
import EquationBody from "../../components/calcomponent/equation/equationBody";
import EquationHeader from "../../components/calcomponent/equation/equationHeader";
import { device_id1 } from "../../assets/Device/sihwa";
import { TotalPostButton } from "../../components/calcomponent/style";
const CalSeoulSihwa = ()=>{
    return(
    <div style={{display: 'flex', flexDirection:'column', width: "100%", height:"100%",alignItems:'center'}}>
        <CalHeader title={"시화 도금 "}/>
        <EquationHeader/>
        {device_id1.map((key)=>
             <EquationBody devicename={key.company}/>
        )}
        <TotalPostButton>Submit</TotalPostButton>
    </div>)
}
export default CalSeoulSihwa;