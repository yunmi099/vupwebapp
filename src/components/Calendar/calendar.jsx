import ReactDatePicker from 'react-datepicker';
import react, {useState} from "react";
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import "./calendar.css"
import { dateToString } from '../../js/dateToString';
import { useDateContext } from '../../context/dateContext';
const DatePicker=() =>{
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [calenStartDate, calenEndDate] = dateRange;
    const {startDate, setStartDate, endDate, setEndDate} = useDateContext();
 
    return (
      <StyledDatePicker
        selectsRange={true}
        startDate={calenStartDate}
        endDate={calenEndDate}
        dateFormat="yyyy/MM/dd"
        maxDate={new Date()}
        minDate={new Date("2020-01-02")}
        onChange={(update) => {
          setDateRange(update);
          // update[0]=> startdate,  update[1] => enddate
          setStartDate(dateToString(update[0]));
          setEndDate(dateToString(update[1]));
        }}
        isClearable={true}
        locale={ko}
   
      />
    );
  };
  const StyledDatePicker = styled(ReactDatePicker)`
    padding: 3px 5px 3px 5px;
    margin: 2px;
    width: 180px;
    border : solid 1.8px;
    border-color: grey;
    border-radius :7px;
  `
export default DatePicker;