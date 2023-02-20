import Header from "../../components/Layout/header";
import React from 'react';
import { Styles } from "../../components/table/tableStyle";
import { useState, useMemo, useEffect } from "react";
import Table from "../../components/table/table";
import { FetchDataForm } from "../../components/table/fetchdataset";
import axios from "axios";
import {columnData} from "../../components/table/column";
import {TitleButton} from "../../components/table/tableStyle";
import {datetimeToString} from "../../js/dateToString";
const RoutingTable = ()=>{
    const [info, setInfo] = useState();
    const [air, setAir] = useState(true);
    
    const [infoForm, setInfoForm] = useState();
    const [date, setDate] = useState(new Date())
    async function getTableData(air) {
        try { 
          if (air){
          const response = await axios.get(
            `http://192.168.3.125:8080/api/vup/predict?id=1`
          );
          setInfo(response.data);} 
          else {
            const response = await axios.get(
              `http://192.168.3.125:8080/api/vup/predict?id=2`
            );
            setInfo(response.data);  
          }
        } catch (e) {
          console.log(e);
        }
      }
      setInterval(() => {
       getTableData(air);
      setDate(new Date())
      }, 60000);

  

      useEffect(() => {
        getTableData(air);
      }, []);
      useEffect(() => {
        getTableData(air);
      }, [air]);
      useEffect(() => {
        if(info){
            Object.keys(info).map((key) => {
            setInfoForm((prevState) => ({
                    ...prevState,
                    [key]: FetchDataForm(info[key])
            }));}
            );
           
        }
      }, [info]);
      const column = useMemo(() => columnData, []);
      const data = useMemo(()=>infoForm,[infoForm])
      return(
        <>
            <Header location={'/'} />
            <div style={{display:"flex", alignItems:'center', justifyContent:'center', flexDirection:'column'}}>  
            <div style={{display:'flex',justifyContent: "space-between", width:"90vw"}}>
              <div style={{display:'flex', flexDirection:'column'}}>
                <div style={{fontSize:'0.85em'}}>✅ 이 Table은 1분에 한번씩 업데이트 됩니다. </div>     
                <div style={{marginTop:5,fontSize:'0.8em'}}>마지막 업데이트 : {datetimeToString(date)}</div>   
              </div> 
              <div style={{display:'flex', margin:10}}>
                <TitleButton air={air} onClick={()=>{if(!air){setAir(!air)}}}>Air compressed</TitleButton>
                <TitleButton air={!air} onClick={()=>{if(air){setAir(!air)}}}>Steam</TitleButton>
              </div>  
            </div>
              <Styles>
              {infoForm!==undefined? <Table columns={column} data={data} />:null}
              </Styles>
            </div>
        </>
    );
}
export default RoutingTable; 