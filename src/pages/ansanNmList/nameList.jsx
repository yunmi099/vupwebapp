import Graph from "../../components/chart/chart";
import React,{useEffect, useState, useMemo} from 'react';
import NMchart from "../../components/chart/nmChart";
import Header from "../../components/Layout/header"
import { Styles } from "../../components/table/tableStyle";
import DatePicker from '../../components/Calendar/calendar';
import { useDateContext } from '../../context/dateContext';
import axios from "axios";
import Table from "../../components/table/table";
import { columnData } from "./column";
const AnsanNmList = ()=>{
    const [infoForm, setInfoForm] = useState();
    const {startDate, endDate} = useDateContext();
    async function getData() {
    
        try {
          const response = await axios.get(
            `http://192.168.3.125:8081/api/vup/woo?st_dt=${startDate}}&en_dt=${endDate}`
          );
            setInfoForm(response.data)
        } catch (e) {
          console.log(e);
        }
      }

      useEffect(() => {
        getData();
      }, []);
;
      const column = useMemo(() => columnData, []);
      const data = useMemo(()=>infoForm,[infoForm])
    return(
    <div>
        <Header location={'/prevansan'} />
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <div>
            <div style={{fontSize:'0.85em', margin:10}}>
                날짜
            </div>
             <div>
                <DatePicker/>
            </div>
        </div>
            <NMchart/>
            <Styles style={{marginTop:20}}>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>
        </div>
    </div>)
    }

export default AnsanNmList;