import { useNavigate } from 'react-router-dom';
const CalHeader = (props)=>{
    const navigate = useNavigate();
    return(        
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <img src={require('../../assets/images/Logo/logo2.png')} width="20%" style={{margin:"0px 20px"}} onClick={()=>{navigate('/')}}/>
    <div style={{fontSize:"1em",fontWeight:'700', margin:"0px 50px" , color:'blue'}}>{props.title}</div>
</div>);
}
export default CalHeader