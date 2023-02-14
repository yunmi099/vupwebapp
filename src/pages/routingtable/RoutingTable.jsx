import Header from "../../components/Layout/header";
import React from 'react';
import { Styles } from "../../components/table/tableStyle";
import { useState, useMemo, useEffect } from "react";
import Table from "../../components/table/table";
import { FetchDataForm } from "../../components/table/fetchdataset";
import axios from "axios";
import {columnData} from "../../components/table/column";
const RoutingTable = ()=>{
    const [info, setInfo] = useState();
    const [infoForm, setInfoForm] = useState();
    async function getTableData(id) {
        try { 
          const response = await axios.get(
            `http://192.168.3.125:8080/api/vup/predict?id=${id}`
          );
          setInfo(response.data);
        } catch (e) {
          console.log(e);
        }
      }
      useEffect(() => {
        getTableData(2);
      }, []);
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
            <div style={{display:"flex", alignItems:'center', justifyContent:'center'}}>
            <Styles>
             {infoForm!==undefined? <Table columns={column} data={data} />:null}
             </Styles>
            </div>
        </>
    );
}
export default RoutingTable; 