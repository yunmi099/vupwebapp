import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Select= () => {
  const navigate = useNavigate();
  return (
    <div>
      <StyledLi
        onClick={() => {
          navigate("/prevansan");
        }}
      >
        안산 도금 산단
      </StyledLi>
      <StyledLi
        onClick={() => {
          navigate("/prevsihwa");
        }}
      >
        시화 도금 산단
      </StyledLi>
      <StyledLi
        onClick={() => {
          navigate("/prevseoulsihwa");
        }}
      >
        인천 표면 산단
      </StyledLi>
      <StyledLi
        onClick={() => {
          navigate("/rountingtable");
        }}
      >
        Routing Table 
      </StyledLi>
    </div>
  );
};
const StyledLi = styled.div`
border:solid 1px;
border-color: #1e88e5;
border-radius: 17px;
background-color:white;
color: #1e88e5;
padding:10px 10vw;
margin: 20px;
display:flex;
flex-direction: row;
justify-content: space-evenly;
font-size: 0.8em;
font-weight: 800;
&:hover {
  border-color: #b3e5fc;
  color: #b3e5fc;
}
`
export default Select;