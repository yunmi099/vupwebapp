import { useNavigate } from "react-router-dom";
import Dropdown from "../fineDust/DropDown";
import {StyledMenu} from './style'
const PrevHeader = (props)=>{
    const navigate = useNavigate();
    return(      
<>
    <div style={{display:'flex', alignItems:'center', margin:"10px"}}>
        <img src={require('../../assets/images/Logo/left-arrow.png')} width="20px" style={{marginRight:15}} onClick={()=>{navigate('/')}}/>
        <img src={require('../../assets/images/Logo/logo2.png')} width="170px" onClick={()=>{navigate('/')}}/>
    </div>
    <div style={{display:'flex'}}>
        {/* <Dropdown/> */}
        <StyledMenu onClick={()=>window.open('http://iae.darwin3d.co.kr/')}>Routing Network</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevansan')}>안산 도금 산단</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevsihwa')}>시화 도금 산단</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevseoulsihwa')}>인천 표면 산단</StyledMenu>
        <div style={{fontSize:"0.8em",fontWeight:'700', margin:"30px 10px  0px 5px" , color:'blue'}}>{props.title}</div>
    </div>
</>);
}
export default PrevHeader