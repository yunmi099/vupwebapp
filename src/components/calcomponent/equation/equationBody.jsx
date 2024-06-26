import './equation.css'
import { postSourceSink } from '../../../api/api';
import {useState,useRef } from 'react';
import { DeviceButton, StyledInput, PostButton } from '../style';
import { useSourceContext } from '../../../context/sourcesinkContext/useSourcecontext.js'
import { useTotalvalueContext } from '../../../context/totalvalueContext/useTotalvalueContext';
import { useRefContext } from '../../../context/refContext';
import { useDayContext } from '../../../context/dayContext';
const EquationBody = (props)=> {
    const {source} = useSourceContext();
    const {entireValue, setEntireValue} = useTotalvalueContext();
    const {inputRef, setInputRef} = useRefContext();
    const valueIndex = ["demand", "unitp", "se_time", "price", "efficiency"]
    const [value,setValue] = useState({});
    const inputText =  [useRef(), useRef(), useRef(), useRef(), useRef()];
    const {day, setDay} = useDayContext();
    
    return(
        <div className = 'deviceContainer'>
            <DeviceButton>{props.devicename}</DeviceButton>
            {
            valueIndex.map((key, index)=>{
                return <StyledInput key={index} ref={inputText[index]} onChange={(e)=>{
                    setInputRef([...inputRef, inputText[index]])
                    setValue({...value, [key] : e.target.value}); 
                    setEntireValue({...entireValue, [props.devicename]: {...value, [key] : e.target.value}});
                }} ></StyledInput>
            })
            }
            <PostButton onClick={()=>{
                    postSourceSink(day,source,props.devicename,value);
                }}
                >Submit</PostButton>
        </div> 

    );
}
export default EquationBody; 