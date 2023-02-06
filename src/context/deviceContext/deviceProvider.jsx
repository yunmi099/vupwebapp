import {useMemo, useState} from 'react';
import { deviceContext } from './deviceContext';
export const DeviceProvider = ({children})=>{
    const [deviceId, setDeviceId] = useState();
    const value = useMemo(()=>({
        deviceId, setDeviceId
    }),[deviceId, setDeviceId]);
    return(
        <deviceContext.Provider value={value}>{children}</deviceContext.Provider>
    );
} 