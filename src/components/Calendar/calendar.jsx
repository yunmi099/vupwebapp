import ReactDatePicker from 'react-datepicker';
import react, {useState} from "react";
import { ko } from 'date-fns/esm/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import "./calendar.css"
const DatePicker=() =>{
    const [dateRange, setDateRange] = useState([new Date(), new Date()]);
    const [startDate, endDate] = dateRange;
    const dateToString = (date) => {
      return date.getFullYear() + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getDate().toString().padStart(2, '0')
    }
    
    return (
      <StyledDatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy/MM/dd"
        maxDate={new Date()}
        minDate={new Date("2020-01-02")}
        onChange={(update) => {
          setDateRange(update);
          // update[0]=> startdate,  update[1] => enddate
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