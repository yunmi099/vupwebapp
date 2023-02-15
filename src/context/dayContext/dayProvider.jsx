import {useMemo, useState} from "react";
import DayContext from "./dayContext";
import { dateToString } from "../../js/dateToString";
const DayProvider = ({children})=> {
    const todayday = dateToString(new Date());
    const [day, setDay] = useState(todayday);
    const value = useMemo(()=>({
        day, setDay
    }),[day, setDay]);
    return(
        <DayContext.Provider value={value}>
            {children}
        </DayContext.Provider>
    )
}
export default DayProvider;