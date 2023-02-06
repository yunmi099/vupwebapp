import {useMemo, useState} from "react";
import DateContext from "./dateContext";
import { dateToString } from "../../js/dateToString";
const DateProvider = ({children})=> {
    const todayDate = dateToString(new Date());
    const [startDate, setStartDate] = useState(todayDate);
    const [endDate, setEndDate] = useState(todayDate)
    const value = useMemo(()=>({
        startDate,
        setStartDate,
        endDate,
        setEndDate
    }),[startDate, setStartDate, endDate, setEndDate]);
    return(
        <DateContext.Provider value={value}>
            {children}
        </DateContext.Provider>
    )
}
export default DateProvider;