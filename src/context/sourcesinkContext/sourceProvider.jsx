import {useMemo, useState} from 'react';
import { SourceContext } from './sourceContext';
export const SourceProvider = ({children})=>{
    const [source, setSource] = useState(true);
    const value = useMemo(()=>({
        source, setSource
    }),[source, setSource]);
    return(
        <SourceContext.Provider value={value}>{children}</SourceContext.Provider>
    );
} 