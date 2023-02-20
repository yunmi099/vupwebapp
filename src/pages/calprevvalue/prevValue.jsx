import Header from "../../components/Layout/header"
import { Styles } from "../../components/table/tableStyle"
import { useState, useEffect, useMemo } from "react"
import axios from "axios"
import Table from "../../components/table/table";
import {columnData2} from "../../components/table2/column";
import DatePicker from "../../components/Calendar/calendar";
import { TitleButton } from "../../components/calcomponent/style";
import { useDateContext } from '../../context/dateContext';
const PrevValue = (props)=>{
    const device = props.device;
    const [source, setSource] = useState(true)
    const {startDate, setStartDate, endDate, setEndDate} = useDateContext();
    const [info, setInfo] = useState([]); // 초기값을 빈 배열로 설정

    async function getTable2Data(source, deviceID, startDate, endDate) {
      let SOURCE = source ? 1 : 2;
      try { 
        const response = await axios.get(
          `http://192.168.3.125:8080/api/vup/input?source=${SOURCE}&st_dt=${startDate}&en_dt=${endDate}&table=${deviceID}`
        );

        if(response.data.length > 0){
          setInfo(prevState=>[...prevState,response.data]) 
         }
      } catch (e) {
        console.log(e);
        }
      }

      useEffect(() => {
        setInfo([])
        device.map((key)=>{
          getTable2Data(source, key.company, startDate, endDate);
        })
      }, [source, startDate, endDate]);

      const column = useMemo(() => columnData2, []);
      const data = useMemo(()=>info,[info])
    return(<div>
        
        <Header location={"/calsihwa"}/>
        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-start', flexDirection:'column'}}>
            <div style={{display:'flex', width:'90%'}}>
                <TitleButton source={source} onClick={()=>{if(!source){setSource(!source)}}}>Source</TitleButton>
                <TitleButton source={!source} onClick={()=>{if(source){setSource(!source)}}}>Sink</TitleButton>
            </div>
            <div>
            <div style={{fontSize:'0.85em', fontWeight:'600', margin:10}}>
                날짜
            </div>
                <DatePicker style={{marginBottom:10}}/>
            </div>    
                <Styles>
                {
              device.map((key,index)=>{
                return(   
                    info.length!==0&&data[index]!==undefined?
                  <div key={index} style={{width:'90vw', display:'flex', flexDirection:'column', alignItems:'flex-start', marginBottom :20}}>
                    <div style={{fontSize:'0.9em', fontWeight:'700',marginLeft:20, margin:15}}>
                      {key.name}
                    </div>
                    <Table columns={column} data={data[index]} key={index}/>
                  </div> : null
                  );
              })
            }
               </Styles>
        </div>
    </div>)
}
export default PrevValue