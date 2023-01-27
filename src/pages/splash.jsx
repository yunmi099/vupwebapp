import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import Select from "../components/select/homeSelect";
import Login from "../components/Login/login";
import success from "../recoil/loginSuccess";
import {useRecoilState} from 'recoil'
const StyledHeader = styled.header`
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(6px + 2vmin);
font-family: "pretendard";
color: #1e88e5;
`
function Splash() {
  const [animating, setAnimating] = useState(true);
  const [loginSuccess, setLoginSuccess] = useRecoilState(success);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 3000);
  }, []);

  return (
    <StyledHeader>
      <img src={require('../assets/images/Logo/logo1.jpeg')} width="62%"/>
      <Spinner animating={animating} style={{ marginBottom: "10%" }} />
      {animating ? null : (loginSuccess===true ? <Select/>: <Login/>)}
    </StyledHeader>
  );
}
export default Splash;
