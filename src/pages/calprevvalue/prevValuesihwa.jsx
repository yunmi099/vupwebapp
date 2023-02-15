import Header from "../../components/Layout/header"
import { Styles } from "../../components/table/tableStyle"
import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import Table from "../../components/table/table";
import {columnData2} from "../../components/table2/column";
import { FetchDataForm2 } from "../../components/table2/fetchdataset";
import DatePicker from "../../components/Calendar/calendar";
const PrevValueSihwa = ()=>{
    const [info, setInfo] = useState();
    const [infoForm, setInfoForm] = useState()
      async function getTable2Data() {
        try { 
          const response = await axios.get(
            `http://192.168.3.125:8080/api/vup/input?source=1&table=AS00002&st_dt=2022-01-01&en_dt=2023-02-14`

          );
          setInfo(response.data);
        } catch (e) {
          console.log(e);
        }
      }
      useEffect(() => {
        getTable2Data();
      }, []);
      useEffect(() => {
        if(info){
            Object.keys(info).map((key) => {
            setInfoForm((prevState) => ({
                    ...prevState,
                    [key]: FetchDataForm2(info[key])
            }));}
            );
           
        }
      }, [info]);
      const column = useMemo(() => columnData2, []);
      const data = useMemo(()=>infoForm,[infoForm])
    return(<div>
        
        <Header location={"/calsihwa"}/>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
  
            <div style={{fontSize:'0.85em', fontWeight:'600', margin:10}}>
              날짜
            </div>
            <div style={{marginBottom:10}}>
              <DatePicker/>
            </div>
            <Styles>
              <div style={{fontSize:'0.9em', fontWeight:'600', color:'blue', margin:15}}>
                AS00001
              </div>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>
            <Styles>
              <div style={{fontSize:'0.9em', fontWeight:'600', color:'blue', margin:15}}>
                AS00002
              </div>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>
            <Styles>
              <div style={{fontSize:'0.9em', fontWeight:'600', color:'blue', margin:15}}>
                AS00003
              </div>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>
            <Styles>
              <div style={{fontSize:'0.9em', fontWeight:'600', color:'blue', margin:15}}>
                AS00004
              </div>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>
            <Styles>
              <div style={{fontSize:'0.9em', fontWeight:'600', color:'blue', margin:15}}>
                AS00002
              </div>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
            </Styles>

        </div>
    </div>)
}
export default PrevValueSihwa