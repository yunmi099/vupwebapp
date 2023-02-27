import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {StyledMenu, ClickedView} from './style'
import axios from "axios";
import { useEffect } from "react";
import CarouselSlick from "../slider/slick";
const API_KEY = 'f3qQjQNA4nxb920k8gunx00MXcVZAmRTG8ynn5E4VBNxH2lyIv%2BF3xtV2rcaQZEkJ8EdJ1Xb15VXT3nNiEry%2FA%3D%3D'
const PrevHeader = (props)=>{
    const navigate = useNavigate();
    const [data, setData] = useState();
    let station;
    if (props.device === 2) {
        station = "정왕동"
    } else {
        station = "본오동"
    }
    async function getData(station) {
    
        try {
          const response = await axios.get(
            `http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?stationName=${station}&dataTerm=month&pageNo=1&numOfRows=100&returnType=json&serviceKey=${API_KEY}`
          );
          console.log(response.data.response.body.items[0])
          setData(response.data.response.body.items[0])
        } catch (e) {
          console.log(e);
        }
      }
      useEffect(()=>{
        getData(station)
      },[])
    const [show, setShow] = useState(false);
    return(      
<>
    <div style={{display:'flex', alignItems:'center', margin:"10px"}}>
        <img src={require('../../assets/images/Logo/left-arrow.png')} width="20px" style={{marginRight:15}} onClick={()=>{navigate('/')}}/>
        <img src={require('../../assets/images/Logo/logo2.png')} width="170px" onClick={()=>{navigate('/')}}/>
    </div>
    <div style={{display:'flex'}}>
        {/* <Dropdown/> */}
        <div style={{display:'flex', flexDirection:'column', position:"relative"}}>
            <div style={{fontSize:"0.8em",fontWeight:'700', margin:"30px 10px  0px 5px" , color:'blue',textDecoration:'underline'}} onClick={()=>setShow(!show)}>{props.title}</div>
            {show?<ClickedView>
                <div style={{margin: "2vh", fontSize:"0.8em"}}>
                ☁️ {props.title.substring(0,2)} 미세먼지 <br/> 
                {data!==undefined ? <div>✅ 측정 시각 : {data.dataTime}</div>:null}
                </div>
                {data!==undefined?<CarouselSlick data={data}/>:<div style={{margin:"1vh"}}>데이터를 불러오고 있습니다...</div>}
            </ClickedView>:null}
            
        </div>

        
        <StyledMenu onClick={()=>window.open('http://iae.darwin3d.co.kr/')}>Routing Network</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevansan')}>안산 도금 산단</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevsihwa')}>시화 도금 산단</StyledMenu>
        <StyledMenu onClick={()=>navigate('/prevseoulsihwa')}>인천 표면 산단</StyledMenu>
        
    </div>
</>);
}
export default PrevHeader