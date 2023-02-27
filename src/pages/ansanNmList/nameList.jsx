import React,{useEffect, useState, useMemo} from 'react';
import NMchart from "../../components/chart/nmChart";
import Header from "../../components/Layout/header"
import { Styles } from "../../components/table/tableStyle";
import DatePicker from '../../components/Calendar/calendar';
import { useDateContext } from '../../context/dateContext';
import axios from "axios";
import Table from "../../components/table/table";
import { columnData } from "./column";
import { AnsanAdd } from "../../assets/Device/ansanAdd";
import '../../components/select/Info.css'
import { datetimeToString } from '../../js/dateToString';
const AnsanNmList = ()=>{
    const [infoForm, setInfoForm] = useState();
    const {startDate, endDate} = useDateContext();
    const [company, setCompany] = useState("영일");
    const [date, setDate] = useState(new Date())
    async function getData() {
        try {
          const response = await axios.get(
            `http://192.168.3.125:8081/api/vup/woo?id=${company}&st_dt=${startDate}}&en_dt=${endDate}`
          );
          console.log(response.data)
            setInfoForm(response.data)
        } catch (e) {
          console.log(e);
        }
      }

      useEffect(() => {
        getData();
      }, [startDate, endDate, company]);
      setInterval(() => {
        getData();
       setDate(new Date())
       }, 180000);
      const column = useMemo(() => columnData, []);
      const data = useMemo(()=>infoForm,[infoForm])
    return(
    <div >
        <Header location={'/prevansan'} />
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <div style={{fontSize:"0.85em", display:'flex', flexDirection:'column'}}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{fontSize:'0.85em'}}>✅ 이 Chart와 Table은 3분에 한번씩 업데이트 됩니다. </div>     
                <div style={{marginTop:5,fontSize:'0.8em'}}>마지막 업데이트 : {datetimeToString(date)}</div>   
              </div> 
         <div style={{display:'flex'}}>
          <div>
            <div className="titleFont">
              날짜
            </div>
            <DatePicker/>
          </div>
          <form>
            <div className="titleFont">
              기업
            </div>
            <select className = "input" onChange={(e)=>setCompany(e.target.value)}>
              {AnsanAdd.map((key, index)=><option key={index}>{key}</option>)}
            </select>
          </form>
        </div>     
          </div>
            <NMchart data={infoForm}/>
            <Styles style={{marginTop:20}}>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>
        </div>
    </div>)
    }

export default AnsanNmList;