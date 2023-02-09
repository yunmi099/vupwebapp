import styled from "styled-components";
import "./menu.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDeviceContext } from "../../../context/deviceContext";
const Menu = (props) => {
  const navigate = useNavigate();
  const {setDeviceId} = useDeviceContext();  
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
useEffect(()=>{
  if (props.number ==0){
    setSelect1(true);
  } else if(props.number ==1){
    setSelect2(true);
  } else {
    setSelect3(true);
  }
},[])
  return (
    <div className="list">
      <li
        
        className= {select1 ? "selectedButton": "button"}
        onClick={() => {
          setSelect1(true);
          setSelect2(false);
          setSelect3(false);
          setDeviceId("AS00001_E00001");
          navigate("/ansan");
        }}
      >
        안산 도금 산단
      </li>
      <li
        className= {select2 ? "selectedButton": "button"}
        onClick={() => {
          setSelect1(false);
          setSelect2(true);
          setSelect3(false);
          setDeviceId("SH00001_E00001");
          navigate("/sihwa");
        }}
      >
        시화 도금 산단
      </li>
      <li
        className= {select3 ? "selectedButton": "button"}
        onClick={() => {
          setSelect1(false);
          setSelect2(false);
          setSelect3(true);
          setDeviceId("SH00012_E00001");
          navigate("/seoulsihwa");
        }}
      >
        인천 표면 산단
      </li>
    </div>
  );
};
export default Menu;
