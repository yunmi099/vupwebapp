import { useNavigate } from 'react-router-dom';
const CalHeader = (props)=>{
    const navigate = useNavigate();
    return(        
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'100%'}}>
      <div style={{display:'flex', alignItems:'center', margin:"10px"}}>

<img src={require('../../assets/images/Logo/left-arrow.png')} width="30px" style={{marginRight:15}} onClick={()=>{navigate(props.location)}}/>
<img src={require('../../assets/images/Logo/logo2.png')} width="170px" onClick={()=>{navigate('/')}}/>

</div>

    <div style={{fontSize:"1em",fontWeight:'700', margin:"0px 20px" , color:'blue'}}>{props.title}</div>
</div>);
}
export default CalHeader