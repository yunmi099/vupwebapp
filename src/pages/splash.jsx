import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Spinner from "react-activity/dist/Spinner";
import "react-activity/dist/Spinner.css";
import Select from "../components/select/homeSelect";
const StyledHeader = styled.header`
background-color: #e2f6ff ;
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
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
    }, 3000);
  }, []);
  return (
    <StyledHeader>
      <h1>고등기술연구원</h1>
      <Spinner animating={animating} style={{ marginBottom: "10%" }} />
      {animating ? null : <Select/>}
    </StyledHeader>
  );
}

export default Splash;