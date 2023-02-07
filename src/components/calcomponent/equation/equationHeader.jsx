import react, {useState} from 'react'
import { Element, TitleButton } from '../style.js';
import { useSourceContext } from '../../../context/sourcesinkContext/useSourcecontext.js';
const EquationHeader = (props)=>{
    const {source, setSource} = useSourceContext();
    return(
    <div style={{flexDirection:'column', display:'flex',width:'100%', marginTop:'20px'}}>  
        <div style={{display: "flex",marginLeft:'8%'}}> 
            <TitleButton source={source} onClick = {()=>{if(!source){setSource(!source)}}}>Source</TitleButton>
            <TitleButton source={!source} onClick = {()=>{if(source){setSource(!source)}}}>Sink</TitleButton>
        </div>
        <div style={{display:'flex', margin:"5% 15% 0px 20%" , justifyContent:'space-evenly'}}>
            <Element>수요(Kg/hr)</Element>
            <Element>단가(천원)</Element>
            <Element>시간(시작-종료)</Element>
            <Element>예측단가(천원)</Element> 
            <Element>효율(%)</Element>
        </div>
    </div>)
}
export default EquationHeader;