import './equation.css'
import { postSourceSink } from '../../../api';
import {useState} from 'react';
import { DeviceButton, StyledInput, PostButton } from '../style';
import { useSourceContext } from '../../../context/sourcesinkContext/useSourcecontext.js'
import { useTotalvalueContext } from '../../../context/totalvalueContext/useTotalvalueContext';
const EquationBody = (props)=> {
    const {source} = useSourceContext();
    const {entireValue, setEntireValue} = useTotalvalueContext();
    const valueIndex = ["demand", "unitp", "se_time", "price", "effiency"]
    const [value,setValue] = useState({})
    
    return(
        <div className = 'deviceContainer'>
            <DeviceButton>{props.devicename}</DeviceButton>
            {
            valueIndex.map((key, index)=>{
                return <StyledInput key={index} onChange={(e)=>{
                    setValue({...value, [key] : e.target.value}); 
                    setEntireValue({...entireValue, [props.devicename]: {...value, [key] : e.target.value}});
                }}></StyledInput>
            })
            }
            <PostButton onClick={()=>{
                if(source ===true){
                    postSourceSink(1,props.devicename,value)
                } else {
                    postSourceSink(2, props.devicename,value)
                }
                }}>Submit</PostButton>
        </div> 

    );
}
export default EquationBody; 