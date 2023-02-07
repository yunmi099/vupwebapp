import {useMemo, useState} from 'react';
import { totalvalueContext } from './totalvalueContext';
export const TotalvalueProvider = ({children})=>{
    const [entireValue, setEntireValue] = useState({});
    const value = useMemo(()=>({
        entireValue, setEntireValue
    }),[entireValue, setEntireValue]);
    return(
        <totalvalueContext.Provider value={value}>{children}</totalvalueContext.Provider>
    );
} 