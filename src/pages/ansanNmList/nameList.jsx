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
const AnsanNmList = ()=>{
    const [infoForm, setInfoForm] = useState();
    const {startDate, endDate} = useDateContext();
    const [company, setCompany] = useState("영일")
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
      }, []);
      const column = useMemo(() => columnData, []);
      const data = useMemo(()=>infoForm,[infoForm])
    return(
    <div >
        <Header location={'/prevansan'} />
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
        <div style={{fontSize:"0.85em", display:'flex'}}>
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
            <NMchart company={company}/>
            <Styles style={{marginTop:20}}>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>
        </div>
    </div>)
    }

export default AnsanNmList;