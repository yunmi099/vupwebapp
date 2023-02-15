import react, {useState} from 'react'
import { Element, TitleButton } from '../style.js';
import { useSourceContext } from '../../../context/sourcesinkContext/useSourcecontext.js';
import { useTotalvalueContext } from '../../../context/totalvalueContext/useTotalvalueContext';
import useRefContext from '../../../context/refContext/useRefContext.js';
import { useNavigate } from 'react-router-dom';
import { dateToString } from '../../../js/dateToString.js';
import useDayContext from '../../../context/dayContext/useDayContext.js';
const EquationHeader = (props)=>{
    const {source, setSource} = useSourceContext();
    const {entireValue, setEntireValue} = useTotalvalueContext();
    const {inputRef, setInputRef} = useRefContext();
    const navigate= useNavigate();
    const {day, setDay} =useDayContext();
    return(
    <div style={{flexDirection:'column', display:'flex',width:'100%', marginTop:'20px'}}> 
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{display: "flex",marginLeft:'8%'}}> 
                <TitleButton source={source} onClick = {()=>{if(!source){setSource(!source)};setEntireValue({});        
                inputRef.map((key)=>{
            key.current.value = null;    
            })
            setInputRef([]);}}>Source</TitleButton>
                <TitleButton source={!source} onClick = {()=>{if(source){setSource(!source)};setEntireValue({});        
                inputRef.map((key)=>{
                key.current.value = null;    
            })
            setInputRef([]);}}>Sink</TitleButton>
            <input type={'date'} className='date' min="2020-01-01" max={dateToString(new Date())} value={day} onChange={(e)=>setDay(e.target.value)}/> 
            </div>
            <div className="checkButton" onClick={()=>{navigate(props.location)}}>
                과거데이터확인하기
            </div>
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